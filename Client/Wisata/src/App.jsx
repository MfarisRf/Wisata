import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Login from './page/login'
import About from './page/about'
import Landingpage from './page/Landingpage'
import OurTeam from './components/OurTeam'
import Notfoundkuliner from './page/Notfoundkuliner'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Notfoundkuliner" element={<Notfoundkuliner/>} />
          <Route path="/Team" element={<OurTeam/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App