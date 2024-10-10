import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";
import { Label, Note } from './types';

export function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
    
    useEffect(() => {
      document.body.style.backgroundColor = currentTheme.background;
      document.body.style.color = currentTheme.foreground;
    }, [currentTheme]);

    return (
      <div id="toggle">
        <button onClick={toggleTheme}> Toggle Theme </button>
      </div>
        
    );
}
   

export function ClickCounter() {
 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);

 const theme = useContext(ThemeContext);
return (
   <div
     style={{
       background: theme.background,
       color: theme.foreground,
       padding: "20px",
     }}
   >
     <p>You clicked {count} times </p>
     <button
       onClick={() => setCount(count + 1)}
       style={{ background: theme.foreground, color: theme.background }}
     >
       Click me
     </button>
   </div>
 );
}
type SetNotesFunction = React.Dispatch<React.SetStateAction<Note[]>>;
export function ToggleFavorite(id: number, setNotes: SetNotesFunction) {
    setNotes((prevNotes) =>
        prevNotes.map((note) =>
            note.id === id ? { ...note, favorite: !note.favorite} : note
        )
    );
}
interface HeartButtonProps {
    id: number;
    isFavorite: boolean;
    setNotes: SetNotesFunction;
}

export function HeartButton({ id, isFavorite, setNotes }: HeartButtonProps) {
    const handleClick = () => {
      setNotes((notes) =>
        notes.map((note) =>
            note.id === id ? {...note, favorite: !note.favorite} : note)
    )};

    return (
        <button onClick={handleClick}>
            {isFavorite ? "❤️" : "♡"}
        </button>
    )
}

export function RemoveNote(id:number, setNotes: SetNotesFunction) {
    setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== id)
    );
  return (
    <div>
      <button onClick={() => RemoveNote}>x</button>
    </div>
  )
}
