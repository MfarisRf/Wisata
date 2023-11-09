import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Login from './page/login'
import About from './page/about'
import Dashboard from './page/Dashboard'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dasboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App