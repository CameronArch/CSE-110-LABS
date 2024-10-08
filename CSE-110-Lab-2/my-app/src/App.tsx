import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { ClickCounter, HeartButton, ToggleTheme } from "./hooksExercise";
function App() {
 return (
    <div className='app-container'>
        
        <form className="note-form">
            <div><input placeholder="Note Title"></input></div>

            <div><textarea></textarea></div>

            <div><button type="submit">Create Note</button></div>
        </form>
        
        <div className="notes-grid">
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
                <HeartButton />
             <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
         
       ))}
    <div>
        <h2>List of Favorites:</h2>
        {dummyNotesList.map((note) => (
        <p>
            {note.favorite ? note.title : null}
        </p>
        ))}
    </div>
    </div>
     <ClickCounter />
    </div>

 );
}

export default App;