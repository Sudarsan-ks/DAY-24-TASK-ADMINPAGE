
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import All from './Components/All'
import Frontend from './Components/Frontend'
import Backend from './Components/Backend'
import Fullstack from './Components/Fullstack'
import Information from './Components/Information'
import Error from './Components/Error'

function App() {


  return (<>
    <div className="container">
      <Navbar />
      <div className="card-component">
        <div className="card-container">
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/fullstack' element={<Fullstack />} />
            <Route path='/frontend' element={<Frontend />} />
            <Route path='/backend' element={<Backend />} />
          </Routes>
        </div>
        <div className="info-container">
          <Routes>
            <Route path='/information/:id' element={<Information />} />
          </Routes>
        </div>
      </div>

    </div>
  </>)
}

export default App
