import Header from "./components/header"
import MainPage from "./components/main-page"
import Sidebar from "./components/sidebar"
import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between w-full ">
      <div className="hidden md:block">
        <Sidebar/>
      </div>
      <button className="md:hidden absolute top-0 left-0 mt-6 mx-2" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setIsModalOpen(false)}>
          <div className="fixed left-0 top-0 h-full p-4 rounded-r animate-slide-in z-50" onClick={e => e.stopPropagation()}>
            <Sidebar/>
            <button onClick={() => setIsModalOpen(false)}>Close Sidebar</button>
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