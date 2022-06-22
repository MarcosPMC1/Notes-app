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

  return (
    <div className="container">
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
