import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-bar  h-10 pl-2 pr-40 py-2.5 bg-zinc-100 rounded border border-neutral-200 justify-start items-center gap-2 flex">
      <button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcf7c4a0c9deacff9da8103d54af3a4a4e95e18bb7074825ab42266b34518e4?"
          className="w-3.5 h-3.5 relative"
        />
      </button>
      <input
        className="bg-zinc-100 h-10 w-72 text-zinc-500 text-sm font-normal leading-tight outline-none"
        placeholder="Search features, tutorials, etc."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;