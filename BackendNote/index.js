const express = require('express');
const mqtt = require('mqtt');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// MQTT Client
const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL);

// MongoDB Schema
const NoteSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', NoteSchema);

// MQTT Subscribe
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe('/add', (err) => {
    if (err) console.error('MQTT subscription error:', err);
  });
});

// Handle MQTT messages
mqttClient.on('message', async (topic, message) => {
  if (topic === '/add') {
    try {
      const note = message.toString();
      // Save directly to MongoDB
      await Note.create({ content: note });
    } catch (error) {
      console.error('Error handling MQTT message:', error);
    }
  }
});

// HTTP endpoint to fetch all tasks
app.get('/fetchAllTasks', async (req, res) => {
  try {
    const notes = await Note.find().sort({ timestamp: -1 });
    res.json({ notes: notes.map(note => note.content) });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 