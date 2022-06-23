import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NoteList from './components/NotesList';

function App() {

  const [notes, setNotes] = useState([
    {
        id: nanoid(),
        text: 'This is my first Note!',
        date: '22/06/2022',
    },
    {
        id: nanoid(),
        text: 'This is my second Note!',
        date: '22/06/2022',
    },
    {
        id: nanoid(),
        text: 'This is my third Note!',
        date: '22/06/2022',
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NoteList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
