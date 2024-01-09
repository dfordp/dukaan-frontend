import Header from "./components/header"
import MainPage from "./components/main-page"
import Sidebar from "./components/sidebar"
import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between w-full bg-zinc-100 md:bg-white ">
    <div className="hidden lg:block">
      <Sidebar/>
    </div>
    <button className="lg:hidden absolute top-0 left-0 mt-6 mx-2" onClick={() => setIsSidebarOpen(true)}>
      <FontAwesomeIcon icon={faBars} />
    </button>
    {isSidebarOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
        <div className="w-3/4 md:w-1/3 animate-slide-in">
          <Sidebar/>
        </div>
      </div>
    )}
      <div className="flex flex-col flex-grow bg-zinc-100">
        <Header/>
        <MainPage/>
      </div>
    </div>
  )
}

export default App;