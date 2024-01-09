import LeftSideComponents from "./components/LeftSideComponents"
import RightSideComponents from "./components/RightSideComponents"
import SearchBar from "./components/SearchBar"

const Header = () => {
  return (
    <div className="flex justify-between w-full bg-white py-3 px-8">
      <LeftSideComponents/>
      <SearchBar/>
      <RightSideComponents/>
    </div>
  )
}

export default Header

