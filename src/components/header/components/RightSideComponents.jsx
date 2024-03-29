const RightSideComponents = () => {
  return (
    <div className="items-center self-stretch flex gap-3">
    <div className="justify-end items-center flex gap-1.5 my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/973e1810feb7e56707622b41de893d3527fee0e0e28f864269d782ef7282bfd4?"
        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto hidden lg:block"
      />
      <span className="justify-between items-center self-stretch flex gap-5">
        <button className="text-neutral-600 text-right text-sm font-medium leading-4 my-auto hover:opacity-75 hidden lg:block">
          Need help?
        </button>
        <div className="bg-zinc-300 self-stretch flex w-px shrink-0 h-6 flex-col hidden lg:block" />
      </span>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d981c43c218a93158db2b6432dbf07405683d703b5b1b45a2f4864ce9b6725a8?"
      className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full hover:opacity-75"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eedb73258c91e2326cf6a4d2d8cd9514a03423608f67146a7efc73f23e6b507b?"
      className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full hover:opacity-75"
    />
  </div>
  )
}

export default RightSideComponents
