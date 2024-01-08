const  Header= () => {
  return (
    <div className="w-[1216px] h-16 bg-white justify-start items-start inline-flex">
      <div className="w-[1216px] h-16 px-8 py-3 bg-white border-b border-zinc-300 justify-start items-center gap-4 flex">
        <div className="grow shrink basis-0 h-7 justify-start items-center gap-6 flex">
          <div className="flex-col justify-center items-start gap-0.5 inline-flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-start items-center gap-4 flex">
                  <div className="text-zinc-900 text-xl font-medium font-['Inter'] leading-7">Payments</div>
                </div>
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-3.5 h-3.5 relative" />
                  <div className="text-neutral-600 text-xs font-normal font-['Inter'] leading-none">How it works</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 justify-start items-start flex">
          <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-zinc-100 rounded border border-neutral-200 justify-start items-center gap-2 flex">
            <div className="w-3.5 h-3.5 relative" />
            <div className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">Search features, tutorials, etc.</div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-10 justify-end items-center gap-3 flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="justify-end items-center gap-1.5 flex">
              <div className="w-4 h-4 relative" />
              <div className="justify-end items-center gap-5 flex">
                <div className="text-right text-neutral-600 text-[13px] font-medium font-['Inter'] leading-none">Need help?</div>
                <div className="w-px h-6 bg-zinc-300" />
              </div>
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
              <div className="w-[18.89px] h-[22.22px] left-[10.56px] top-[8.89px] absolute">
              </div>
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
