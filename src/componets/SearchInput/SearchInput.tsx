import React from "react";
import "./SearchInput.modules.css";

interface ISearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
}

export default function SearchInput({
  searchValue,
  setSearchValue,
}: ISearchInputProps) {
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.currentTarget.value);
  }

  return (
    <div className="input__container">
      <input
        value={searchValue}
        className="search-input"
        onChange={(event) => handleSearchChange(event)}
        placeholder="&#128269; Поиск по имени..."
      />
    </div>
  );
}
