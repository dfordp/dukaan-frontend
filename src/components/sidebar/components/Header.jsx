const Header = () => {
  return (
    <div className="flex gap-3 pr-4 items-start">
      <div className="rounded bg-white flex aspect-square flex-col justify-center items-center w-10 h-10 px-px">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-square object-contain object-center w-full overflow-hidden"
        />
      </div>
      <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
        <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
          Nishyan
        </div>
        <div className="text-white text-sm leading-4 underline whitespace-nowrap mt-1">
          Visit store
        </div>
      </span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5f608b6ce9730cea85c11c8d232d87963ed700103a61e54af2a14cec35feae?"
        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  )
}

export default Header
