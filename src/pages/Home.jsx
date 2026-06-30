import { useState, useEffect } from "react";
import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

function Home() {

  const colors = [
    "blue",
    "purple",
    "green",
    "orange",
    "pink",
  ];

  // Load Notes only once
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editId, setEditId] = useState(null);

  // Save Notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description) => {

    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    // Update Note
    if (editId) {

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editId
            ? {
                ...note,
                title,
                description,
              }
            : note
        )
      );

      setEditId(null);

      return;
    }

    // New Note
    const newNote = {

      id: Date.now(),

      title,

      description,

      date: new Date().toLocaleString(),

      pinned: false,

      color: colors[Math.floor(Math.random() * colors.length)],

    };

    setNotes((prevNotes) => {

      const updatedNotes = [newNote, ...prevNotes];

      return updatedNotes.sort(
        (a, b) => Number(b.pinned) - Number(a.pinned)
      );

    });

  };

  const deleteNote = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmDelete) return;

    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );

  };

  const editNote = (note) => {
    setEditId(note.id);
  };

  const pinNote = (id) => {

    setNotes((prevNotes) => {

      const updatedNotes = prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      );

      return updatedNotes.sort(
        (a, b) => Number(b.pinned) - Number(a.pinned)
      );

    });

  };

  return (

    <main className="dashboard">

      <Header />

      <div className="dashboard-content">

        <section className="left-panel">

          <div className="stats-card">

            <h3>📋 Total Notes</h3>

            <span>{notes.length}</span>

          </div>

          <NoteForm
            addNote={addNote}
            editId={editId}
            notes={notes}
          />

        </section>

        <section className="right-panel">

          <h2>📂 Your Notes</h2>

          <NoteList
            notes={notes}
            deleteNote={deleteNote}
            editNote={editNote}
            pinNote={pinNote}
          />

        </section>

      </div>

    </main>

  );

}

export default Home;