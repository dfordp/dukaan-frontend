import LeftSideComponents from "./components/LeftSideComponents"
import RightSideComponents from "./components/RightSideComponents"
import SearchBar from "./components/SearchBar"

const Header = () => {
  return (
    <div className="items-center border-b-[color:var(--Black-85,#D9D9D9)] bg-white flex w-full justify-between gap-5 px-8 py-3 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <LeftSideComponents/>
      <SearchBar/>
      <RightSideComponents/>
    </div>
  )
}

export default Header

