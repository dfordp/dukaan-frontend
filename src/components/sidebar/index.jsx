import Footer from "./components/Footer"
import Header from "./components/Header"

const Sidebar = () => {
  return (
    <div className="bg-blue-950 w-56 h-[920px] px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 inline-fle">
      <div className="w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
        <Header/>
      </div>
      <div className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Home</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Orders</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Products</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Delivery</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Marketing</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Analytics</div>
        </div>
        <div className="w-52 px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative" />
          <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Payments</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Tools</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Discounts</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Audience</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Appearance</div>
        </div>
        <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
          <div className="w-5 h-5 relative opacity-80" />
          <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">Plugins</div>
        </div>
      </div>
      <div className="h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex">
        <Footer/>
      </div>
    </div>
  )
}

export default Sidebar
