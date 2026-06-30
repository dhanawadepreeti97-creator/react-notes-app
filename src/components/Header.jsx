import { FaStickyNote } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";

function Header() {
  return (
    <header className="hero">

      <div className="hero-left">

        <div className="hero-icon">
          <FaStickyNote />
        </div>

        <div>

          <h1>Notes Dashboard</h1>

          <p>
            Capture your thoughts. Organize your ideas.
          </p>

        </div>

      </div>

      <div className="hero-right">

        <FaRegNoteSticky />

      </div>

    </header>
  );
}

export default Header;