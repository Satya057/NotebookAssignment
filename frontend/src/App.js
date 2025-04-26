import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import axios from 'axios';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';

function App() {
  const [notes, setNotes] = useState([]);
  const [client, setClient] = useState(null);

  useEffect(() => {
    // Connect to MQTT broker
    const mqttClient = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');
    setClient(mqttClient);

    // Fetch initial notes
    fetchNotes();

    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://backend-note-hqmy0e0l0-satya057s-projects.vercel.app/fetchAllTasks');
      setNotes(response.data.notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = (note) => {
    if (client) {
      client.publish('/add', note);
      // Optimistically update UI
      setNotes([...notes, note]);
      // Fetch updated notes after a short delay
      setTimeout(fetchNotes, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3075/3075908.png" 
            alt="Note App" 
            className="w-8 h-8 mr-2"
            style={{ filter: 'invert(31%) sepia(45%) saturate(846%) hue-rotate(346deg) brightness(92%) contrast(89%)' }}
          />
          <h1 className="text-2xl font-bold text-primary">Note App</h1>
        </div>
        <NoteInput onAdd={addNote} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App; 