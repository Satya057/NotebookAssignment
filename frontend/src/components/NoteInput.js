import React, { useState } from 'react';

function NoteInput({ onAdd }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      onAdd(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="New Note..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default NoteInput; 