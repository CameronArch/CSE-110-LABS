import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { HeartButton, ToggleTheme, ToggleFavorite, RemoveNote } from "./hooksExercise";
import { FormEvent, useState } from 'react';
function App() {
  const [notes, setNotes] = useState(dummyNotesList);
  
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    favorite: false,
  };

const [selectedNote, setSelectedNote] = useState<Note>(initialNote);
const [createNote, setCreateNote] = useState(initialNote);
 
 function createNoteHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newNote: Note = {
      ...createNote,
      id: notes.length + 1,
    };
    setNotes([...notes, newNote]);
    setCreateNote(initialNote);
  }

  return (
    
    <div className='app-container'>
        
        <form className="note-form" onSubmit={createNoteHandler}>
        
    	<div>
      	<input
        	placeholder="Note Title"
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required>
      	</input>
    	</div>

    	<div>
      	<textarea
        	onChange={(event) =>
          	setCreateNote({ ...createNote, content: event.target.value })}
        	required>
      	</textarea>
    	</div>

  <div>
     	<select
       	onChange={(event) =>
          setCreateNote({ ...createNote, label: event.target.value as Label })}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
     	</select>
   	</div>

    	<div><button type="submit">Create Note</button></div>
      
  	</form>
        
        <div className="notes-grid">
       {notes.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
            
              <HeartButton id={note.id} isFavorite={note.favorite} setNotes={setNotes}/>
            
              <button onClick={() => RemoveNote(note.id, setNotes)}>x</button>
           </div>
           
           <h2 contentEditable="true"> {note.title} </h2>
           <p contentEditable="true"> {note.content} </p>
           <p contentEditable="true"> {note.label} </p>
           
         </div>
         
       ))}
    
    </div>
    <div>
    <ToggleTheme />
        <h2>List of Favorites:</h2>
        {notes.map((note) => (
        <p>
          {note.favorite ? note.title : null}
        </p>
        ))}
    </div>
    
    </div>
    

 );
}

export default App;