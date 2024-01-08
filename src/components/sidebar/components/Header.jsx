const Header = () => {
  return (
    <div className="w-48 justify-start items-center gap-3 inline-flex">
        <img className="w-10 h-10 bg-white rounded"  src="/src/assets/figma-assets/profile.png"/>
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
            <div className="self-stretch text-white text-[15px] font-medium font-['Inter'] leading-snug">Nishyan</div>
            <div className="self-stretch opacity-80 text-white text-[13px] font-normal font-['Galano Grotesque'] underline leading-none">Visit store</div>
        </div>
        {/* <img className="w-[39px] h-[39px] left-[0.50px] top-[0.50px] absolute rounded" src="https://via.placeholder.com/39x39" /> */}
        <img className="w-5 h-5 relative" src="/src/assets/figma-assets/Chevron Down.svg"/>
    </div>
  )
}

export default Header
