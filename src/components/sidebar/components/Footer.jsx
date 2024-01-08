
const Footer = () => {
  return (
    <div className="justify-start items-center gap-3 inline-flex">
        <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
        <div className="w-6 h-6 relative">
            <img className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute" src="https://via.placeholder.com/24x20" />
        </div>
        </div>
        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="opacity-80 text-white text-[13px] font-normal font-['Inter'] leading-none">Available credits</div>
        <div className="text-white text-base font-medium font-['Inter'] leading-normal">222.10</div>
        </div>
    </div>
  )
}

export default Footer
