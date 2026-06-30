import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search your notes..."
      />
    </div>
  );
}

export default SearchBar;