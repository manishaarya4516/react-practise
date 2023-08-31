import React, { useState } from "react";
import { HomeStyle } from "./homestyle";
import { Notes } from "../notes/notes";

export const Home = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  const addPost = () => {
    if (!title || !description) {
      return;
    }
    const newNotes = {
      title: title,
      description: description,
    };
    
    notes.push(...notes, newNotes);
    
    setTitle("");
    setDescription("");
    console.log(notes)
  
    localStorage.setItem( "notes",JSON.stringify(notes) )
  };

  return (
    <HomeStyle>
      <div className="notes-form">
        <label className="label-post">Title</label>
        <input
          type="text"
          placeholder="Add Title"
          className="input-post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="label-post">Description</label>
        <textarea
          className="input-post"
          name="Add Description"
          rows="4"
          cols="50"
          placeholder="Add Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn-post" onClick={addPost}>
          ADD
        </button>
      </div>
      <h3>Notes</h3>
      <div className="notes-page">
  
          <Notes />
       
      </div>
    </HomeStyle>
  );
};
