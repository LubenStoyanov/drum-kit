export default function Searchbar({ onFilterSoundChange }) {
  return (
    <div>
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search for specific sound..."
        onChange={(e) => onFilterSoundChange("", e.target.value)}
      />
    </div>
  );
}
