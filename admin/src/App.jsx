import './App.css'
import {Routes , Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import InfoPage from './Pages/InfoPage/InfoPage'
import RoomSet from './Pages/RoomSet/RoomSet'

function App() {

  return (
    <>
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/studentinfo' element={<InfoPage />} />
          <Route path='/roomset' element={<RoomSet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
