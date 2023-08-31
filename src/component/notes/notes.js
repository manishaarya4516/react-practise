import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { NoteStyle } from "./notestyle";

export const Notes = () => {
  const notes = JSON.parse(localStorage.getItem("notes"));

  const handleDelete = (index) => {
    // Remove the note at the given index from the notes array
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    window.location.reload(); // Refresh the page to reflect the changes
  };

  const handleEdit = (index) => {
    console.log(`Editing note at index: ${index}`);
  };
  return (
    <NoteStyle>
      <div className="notes-container">
        <div className="notes-content">
          {notes.map((item, index) => {
            return (
              <>
                <h4>title</h4>
                <p>{item.title}</p>

                <h4>description</h4>
                <p>{item.description}</p>
                <DeleteFilled
                  className="delete-icon"
                  onClick={() => handleDelete(index)}
                />
                <EditFilled
                  className="delete-icon"
                  onClick={() => handleEdit(index)}
                />
              </>
            );
          })}
        </div>
        <div className="icon"></div>
      </div>
    </NoteStyle>
  );
};
