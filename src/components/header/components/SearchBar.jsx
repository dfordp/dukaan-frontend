const SearchBar = () => {
  return (
    <span className="items-center rounded border border-[color:var(--Black-90,#E6E6E6)] bg-zinc-100 self-stretch flex justify-between gap-2 px-4 py-2.5 border-solid">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcf7c4a0c9deacff9da8103d54af3a4a4e95e18bb7074825ab42266b34518e4?"
        className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
      />
      <div className="text-zinc-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
        Search features, tutorials, etc.
      </div>
    </span>
  );
}


export default SearchBar

