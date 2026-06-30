import {
  FaTrash,
  FaEdit,
  FaThumbtack,
} from "react-icons/fa";

function NoteItem({
  note,
  deleteNote,
  editNote,
  pinNote,
}) 
 
{
  return (
    <div
      className={`note-card ${note.color || "blue"} ${
        note.pinned ? "pinned" : ""
      }`}
    >
    <div className="card-top">

    <div className="card-content">

        {note.pinned && (
            <span className="pin-label">
                Pinned
            </span>
        )}

        <h3>{note.title}</h3>

    </div>

    <button
        className={`pin-btn ${note.pinned ? "active-pin" : ""}`}
        onClick={() => pinNote(note.id)}
    >
        <FaThumbtack />
    </button>

    </div>

      <p>{note.description}</p>

      <small>{note.date}</small>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => editNote(note)}
        >
          <FaEdit /> Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteNote(note.id)}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;