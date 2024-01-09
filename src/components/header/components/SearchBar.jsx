const SearchBar = () => {
  return (
    <span className="h-10 pl-2 pr-28  py-2.5 bg-zinc-100 rounded border border-neutral-200 justify-start items-center gap-2 flex">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcf7c4a0c9deacff9da8103d54af3a4a4e95e18bb7074825ab42266b34518e4?"
        className="w-3.5 h-3.5 relative"
      />
      <div className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">
        Search features, tutorials, etc.
      </div>
    </span>
  );
}


export default SearchBar

