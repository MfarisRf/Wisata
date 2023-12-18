import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './page/Admin/Login'
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
import DetailWisataMajalengka from './page/DetailWisataMajalengka'
import DetailKulinerIndramayu from './page/DetailKulinerindramayu'
import DetailKulinerCirebon from './page/DetailKulinerCirebon'
import DetailOlehOlehMajalengka from './page/DetailOlehOlehMajalengka'
import DetailOlehOlehCirebon from './page/DetailOlehOlehCirebon'
import DetailOlehOlehIndramayu from './page/DetailOlehOlehIndramayu'
import DetailWisataKuningan from './page/DetailWisataKuningan'
import DetailKulinerKuningan from './page/DetailKulinerKuningan'
import DetailOlehOlehKuningan from './page/DetailOlehOlehKuningan'
import ProfileAdmin from './page/Admin/ProfileAdmin'
import HomeWisata from './page/Admin/HomeWisata'
import HomeKuliner from './page/Admin/HomeKuliner'
import HomeOleh from './page/Admin/HomeOleh'
import TambahKuliner from './page/Admin/TambahKuliner'
import TambahWisata from './page/Admin/TambahWisata'
import TambahOleh from './page/Admin/TambahOleh'
// import Dashboard from './page/Admin/Dashboard'
import Editwisata from './page/Admin/Wisata/Edit'
import EditKuliner from './page/Admin/Kuliner/Edit'
import EditOlehOleh from './page/Admin/OlehOleh/Edit'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Destinasiwisata" element={<Destinasiwisata/>} /> 
          <Route path="/DetailWisataCrb" element={<DetailWisataCrb/>} />
          <Route path='/DetailWisataMajalengka' element={<DetailWisataMajalengka/>} />
          <Route path="/DetailWisataIndramayu" element={<DetailWisataIndramayu/>} />
          <Route path="/DetailKulinerCirebon" element={<DetailKulinerCirebon/>} />
          <Route path="/DetailKulinerMajalengka" element={<DetailKulinerMajalengka/>} />
          <Route path="/DetailOlehOlehMajalengka" element={<DetailOlehOlehMajalengka/>} />
          <Route path="/DetailOlehOlehCirebon" element={<DetailOlehOlehCirebon/>} />
          <Route path="/DetailWisataKuningan" element={<DetailWisataKuningan/>} />
          <Route path="/DetailKulinerKuningan" element={<DetailKulinerKuningan/>} />
          <Route path="/DetailKulinerIndramayu" element={<DetailKulinerIndramayu/>} />
          <Route path="/DetailOlehOlehKuningan" element={<DetailOlehOlehKuningan/>} />
          <Route path="/DetailOleholehIndramayu" element={<DetailOlehOlehIndramayu/>} />
          <Route path="/Kuliner" element={<Kuliner/>} />
          <Route path="/Oleholeh" element={<Oleholeh/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notfoundkuliner" element={<Notfoundkuliner/>} />
          <Route path="/Notfoundwisata" element={<Notfoundwisata/>} />
          <Route path="/Notfoundoleholeh" element={<Notfoundoleholeh/>} />
          <Route path="/Team" element={<OurTeam/>} />
          <Route path="/ProfileAdmin" element={<ProfileAdmin/>} />
          <Route path="/Dashboard" element={<HomeWisata/>} />
          <Route path="/HomeKuliner" element={<HomeKuliner/>} />
          <Route path="/HomeOleh" element={<HomeOleh/>} />
          <Route path="/TambahKuliner" element={<TambahKuliner/>} />
          <Route path="/TambahWisata" element={<TambahWisata/>} />
          <Route path="/TambahOleh" element={<TambahOleh/>} />
          <Route path="/dashboard/editwisata/:id" element={<Editwisata/>} />
          <Route path="/HomeKuliner/editkuliner/:id" element={<EditKuliner/>} />
          <Route path="/homeoleh/editoleh/:id" element={<EditOlehOleh/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App