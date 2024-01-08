import Header from "./components/header"
import MainPage from "./components/main-page"
import Sidebar from "./components/sidebar"

const App = () => {
  return (
    <div className="flex flex-row h-screen w-full">
      <div>
        <Sidebar/>
      </div>
      <div>
        <Header/>
        <MainPage/>
      </div>
    </div>
  )
}

export default App
