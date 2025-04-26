import React from 'react';

function NoteList({ notes }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Notes</h2>
      <div className="space-y-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            {note}
          </div>
        ))}
        {notes.length === 0 && (
          <p className="text-gray-500 text-center py-4">No notes yet</p>
        )}
      </div>
    </div>
  );
}

export default NoteList; 