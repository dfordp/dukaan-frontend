
const Footer = () => {
  return (
    <div className="items-stretch rounded bg-slate-700 flex w-full flex-col justify-center mt-72 pl-3.5 pr-9 py-1.5 max-md:mt-10 max-md:pr-5">
      <div className="items-center flex justify-between gap-3">
        <div className="items-center rounded bg-white bg-opacity-10 flex aspect-[1.0833333333333333] flex-col justify-center my-auto px-2 py-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18bfcf8360a4061c32b9df570f220cd12e7f4f6d0b178024b822aa2f5a3c896?"
            className="aspect-square object-contain object-center w-6 overflow-hidden"
          />
        </div>
        <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="text-white text-sm leading-4 whitespace-nowrap">
            Available credits
          </div>
          <div className="text-white text-base font-medium leading-6">
            222.10
          </div>
        </span>
      </div>
    </div>
  )
}

export default Footer
