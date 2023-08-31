import React, { useRef } from "react";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { CreateNoteStyle } from "./createnotestyle";

export const CreateNote = ({keepNote}) => {
  // const [note, setNote] = useState([]);
  const title = useRef();
  const desc = useRef();

  const addNote = () => {
    const newObj = {
      title: title.current.value,
      desc: desc.current.value,
    };
    
    keepNote(notes => {
      return [...notes, newObj];
    });
  };


  return (
    <CreateNoteStyle>
      <div className="create">
        <input
          type="text"
          placeholder="title"
          ref={title}
        /> 
        <textarea
          column=""
          rows=""
          placeholder="add a note..."
          ref={desc}
        ></textarea>
          <button className="btn" onClick={addNote} >
          <PlusCircleTwoTone />
        </button>
      </div>
    </CreateNoteStyle>
  );
};
