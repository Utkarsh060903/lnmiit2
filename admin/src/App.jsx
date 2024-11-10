import './App.css'
import {Routes , Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import InfoPage from './Pages/InfoPage/InfoPage'
import RoomSet from './Pages/RoomSet/RoomSet'
import FacultyInfoPage from './Pages/FacultyInfoPage/FacultyInfoPage'
import RoomStatus from './Pages/roomStatus/RoomStatus'

function App() {

  return (
    <>
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/studentinfo' element={<InfoPage />} />
          <Route path='/facultyinfo' element={<FacultyInfoPage />} />
          <Route path='/roomset' element={<RoomSet />} />
          <Route path='/roomstatus' element={<RoomStatus />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
