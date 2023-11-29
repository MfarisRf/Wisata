import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './page/login'
import About from './page/About'
import Landingpage from './page/Landingpage'
import Destinasiwisata from './page/Destinasiwisata'
import Kuliner from './page/Kuliner'
import Oleholeh from './page/Oleholeh'
import OurTeam from './components/OurTeam'
import Notfoundkuliner from './page/Notfoundkuliner'
import Notfoundwisata from './page/Notfoundwisata'
import Notfoundoleholeh from './page/Notfoundoleholeh'
import DetailWisata from './page/DetailWisata'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Destinasiwisata" element={<Destinasiwisata/>} /> 
          <Route path="/DetailWisata" element={<DetailWisata/>} />
          <Route path="/Kuliner" element={<Kuliner/>} />
          <Route path="/Oleholeh" element={<Oleholeh/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notfoundkuliner" element={<Notfoundkuliner/>} />
          <Route path="/Notfoundwisata" element={<Notfoundwisata/>} />
          <Route path="/Notfoundoleholeh" element={<Notfoundoleholeh/>} />
          <Route path="/Team" element={<OurTeam/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App