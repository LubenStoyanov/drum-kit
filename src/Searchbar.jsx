export default function Searchbar(filterSound, onFilterSoundChange) {
  return (
    <div>
      <form action="#">
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search for specific sound..."
          onChange={(e) => onFilterSoundChange(e.target.value)}
        />
      </form>
    </div>
  );
}
