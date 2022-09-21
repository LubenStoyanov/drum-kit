export default function Searchbar({ filterSound, onFilterSoundChange }) {
  const handleInputField = (inputElement, inputValue) => {
    onFilterSoundChange(inputValue);
    inputElement.value = "";
  };

  return (
    <div>
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search for specific sound..."
        onKeyUp={(e) =>
          e.key === "Enter" && handleInputField(e.target, e.target.value)
        }
      />
    </div>
  );
}
