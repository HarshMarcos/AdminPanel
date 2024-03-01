import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './components/Layout/Layout'
import Calender from './pages/Calendar/Calender'


function App() {


  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Calender" element={<Calender />}></Route>
            {/* <Route path="Board" element={<Boards />}></Route> */}
            {/* <Route path="users" element={<DataGrid />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
