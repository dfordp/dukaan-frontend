const LeftSideComponents = () => {
  return (
    <div className="w-[250px] justify-start items-center gap-2 inline-flex">
       <div className="justify-start items-center gap-4 flex">
          <div className="text-zinc-900 text-xl font-medium font-['Inter'] leading-7">Payments</div>
        </div>
      <div className="justify-start items-center gap-1.5 flex">
        <img className="w-3.5 h-3.5 relative hidden lg:block" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09b9811c2e75bc693a6b4dad5c9aff9433906f4c169d96b07f6a6277e47261?apiKey=3c243bff4d854143b1e24c4a3a578c5d&" />
        <button className="text-neutral-600 text-xs font-normal hover:opacity-75 hidden lg:block">How it works</button>
      </div>
    </div>
  )
}

export default LeftSideComponents

