import NoteItem from "./NoteItem";

function NoteList({
  notes,
  deleteNote,
  editNote,
  pinNote,
}) {

  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <h2>📝</h2>
        <h2>No Notes Available</h2>
        <p>Create your first note from the left panel.</p>
      </div>
    );
  }

  const sortedNotes = [...notes].sort(
    (a, b) => b.pinned - a.pinned
  );

  return (
    <div>

      {sortedNotes.map((note) => (

        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
          pinNote={pinNote}
        />

      ))}

    </div>
  );
}

export default NoteList;