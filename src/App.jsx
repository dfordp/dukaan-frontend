import Header from "./components/header"
import MainPage from "./components/main-page"
import Sidebar from "./components/sidebar"

const App = () => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <div>
        <Sidebar/>
      </div>
      <div className="flex flex-col flex-grow bg-zinc-100">
        <Header/>
        <MainPage/>
      </div>
    </div>
  )
}

export default App
