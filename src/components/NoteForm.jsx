import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

function NoteForm({ addNote, editId, notes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editId) {
      const note = notes.find((n) => n.id === editId);

      if (note) {
        setTitle(note.title);
        setDescription(note.description);
      }
    }
  }, [editId, notes]);

  const handleSubmit = () => {
    addNote(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="note-form">

      <h2>📝 Create Note</h2>

      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="8"
        placeholder="Write your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>
        <FaPlus />

        {editId ? "Update Note" : "Add Note"}

      </button>

    </div>
  );
}

export default NoteForm;