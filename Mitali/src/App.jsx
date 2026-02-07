import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Valentine from './pages/Valentine'
import './App.css'

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: 'linear-gradient(135deg, #1a0000 0%, #8B0000 100%)',
          boxShadow: '0 4px 12px rgba(26, 0, 0, 0.5)',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          zIndex: 999
        }}
      >
        <div className="container-fluid px-3">
          <Link className="navbar-brand" to="/" style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff' }}>❤️ Mitali</Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/" style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '500', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#ff6b6b'} onMouseLeave={(e) => e.target.style.color = '#fff'}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about" style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '500', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#ff6b6b'} onMouseLeave={(e) => e.target.style.color = '#fff'}>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </div>
    </>
  )
}

export default App
