import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true;
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
