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
import DetailWisataCrb from './page/DetailWisataCrb'
import DetailKulinerMajalengka from './page/DetailKulinerMajalengka'
import DetailWisataIndramayu from './page/DetailWisataIndramayu'
import DetailOlehOlehMajalengka from './page/DetailOlehOlehMajalengka'
import DetailWisataKuningan from './page/DetailWisataKuningan'
import DetailKulinerKuningan from './page/DetailKulinerKuningan'
import DetailOlehOlehKuningan from './page/DetailOlehOlehKuningan'
import ProfileAdmin from './page/ProfileAdmin'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Destinasiwisata" element={<Destinasiwisata/>} /> 
          <Route path="/DetailWisataCrb" element={<DetailWisataCrb/>} />
          <Route path="/DetailWisataMajalengka" element={<DetailWisataMajalengka/>} />
          <Route path="/DetailWisataIndramayu" element={<DetailWisataIndramayu/>} />
          <Route path="/DetailKulinerMajalengka" element={<DetailKulinerMajalengka/>} />
          <Route path="/DetailOlehOlehMajalengka" element={<DetailOlehOlehMajalengka/>} />
          <Route path="/DetailWisataKuningan" element={<DetailWisataKuningan/>} />
          <Route path="/DetailKulinerKuningan" element={<DetailKulinerKuningan/>} />
          <Route path="/DetailOlehOlehKuningan" element={<DetailOlehOlehKuningan/>} />
          <Route path="/Kuliner" element={<Kuliner/>} />
          <Route path="/Oleholeh" element={<Oleholeh/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notfoundkuliner" element={<Notfoundkuliner/>} />
          <Route path="/Notfoundwisata" element={<Notfoundwisata/>} />
          <Route path="/Notfoundoleholeh" element={<Notfoundoleholeh/>} />
          <Route path="/Team" element={<OurTeam/>} />
          <Route path="/ProfileAdmin" element={<ProfileAdmin/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App