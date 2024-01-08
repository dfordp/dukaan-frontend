const  Header= () => {
  return (
    <div className="items-center border-b-[color:var(--Black-85,#D9D9D9)] bg-white flex w-full justify-between gap-5 px-8 py-3 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <span className="items-stretch flex gap-2 my-auto">
        <div className="text-zinc-900 text-xl font-medium leading-7 grow whitespace-nowrap">
          Payments
        </div>
        <span className="self-center flex gap-1.5 my-auto items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09b9811c2e75bc693a6b4dad5c9aff9433906f4c169d96b07f6a6277e47261?"
            className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-neutral-600 text-xs leading-4 self-stretch grow whitespace-nowrap">
            How it works
          </div>
        </span>
      </span>
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
      <div className="items-center self-stretch flex gap-3">
        <div className="justify-end items-center flex gap-1.5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/973e1810feb7e56707622b41de893d3527fee0e0e28f864269d782ef7282bfd4?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="justify-between items-center self-stretch flex gap-5">
            <div className="text-neutral-600 text-right text-sm font-medium leading-4 my-auto">
              Need help?
            </div>
            <div className="bg-zinc-300 self-stretch flex w-px shrink-0 h-6 flex-col" />
          </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d981c43c218a93158db2b6432dbf07405683d703b5b1b45a2f4864ce9b6725a8?"
          className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eedb73258c91e2326cf6a4d2d8cd9514a03423608f67146a7efc73f23e6b507b?"
          className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div>
  )
}

export default Header
