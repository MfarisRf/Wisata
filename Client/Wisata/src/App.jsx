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
import DetailWisata from './page/DetailWisata'
import DetailKuliner from './page/DetailKuliner'
import DetailOlehOleh from './page/DetailOlehOleh'
import ProfileAdmin from './page/Admin/ProfileAdmin'
import HomeWisata from './page/Admin/HomeWisata'
import HomeKuliner from './page/Admin/HomeKuliner'
import HomeOleh from './page/Admin/HomeOleh'
import TambahKuliner from './page/Admin/TambahKuliner'
import TambahWisata from './page/Admin/TambahWisata'
import TambahOleh from './page/Admin/TambahOleh'
import Editwisata from './page/Admin/Wisata/Edit'
import EditKuliner from './page/Admin/Kuliner/Edit'
import EditOlehOleh from './page/Admin/OlehOleh/Edit'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/About" element={<About />} />



          {/* All Item */}
          <Route path="/Destinasiwisata" element={<Destinasiwisata/>} /> 
          <Route path="/Kuliner" element={<Kuliner/>} />
          <Route path="/Oleholeh" element={<Oleholeh/>} />
          {/* Halaman detail */}
          <Route path="/destinasiwisata/detailwisata/:id" element={<DetailWisata/>} />
          <Route path="/DetailKuliner/detailkuliner/:id" element={<DetailKuliner/>} />
          <Route path="/DetailOlehOleh/detailoleh/:id" element={<DetailOlehOleh/>} />
          {/* Login */}
          <Route path="/Login" element={<Login />} />
          {/* Not Found */}
          <Route path="/Notfoundkuliner" element={<Notfoundkuliner/>} />
          <Route path="/Notfoundwisata" element={<Notfoundwisata/>} />
          <Route path="/Notfoundoleholeh" element={<Notfoundoleholeh/>} />

          <Route path="/Team" element={<OurTeam/>} />
          {/* Halaman Admin */}
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