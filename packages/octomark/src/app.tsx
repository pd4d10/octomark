import { Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Login } from './login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
