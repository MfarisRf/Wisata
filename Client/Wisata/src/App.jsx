import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Login from './page/login'
import About from './page/about'
import Dashboard from './page/Dashboard'
import OurTeam from './components/OurTeam'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dasboard" element={<Dashboard/>} />
          <Route path="/Team" element={<OurTeam/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App