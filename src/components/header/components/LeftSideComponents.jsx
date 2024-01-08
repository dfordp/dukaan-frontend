const LeftSideComponents = () => {
  return (
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
  )
}

export default LeftSideComponents
