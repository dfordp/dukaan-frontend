import { items } from "../../constants"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Item from "./components/Item"
import OverlayItem from "./components/OverlayItem"

const Sidebar = () => {


  return (
    <div className="items-stretch bg-slate-800 flex w-full grow flex-col mx-auto px-2 py-4 font-['Galano Grotesque']">
      <Header/>
      <div className="mt-5">
      {items.map((item, index) => (
        item.title === 'Payments'
          ? <OverlayItem key={index} imageUrl={item.imageUrl} title={item.title} />
          : <Item key={index} imageUrl={item.imageUrl} title={item.title} />
      ))}
      </div>
    <Footer/>
    </div>
  )
}

export default Sidebar
