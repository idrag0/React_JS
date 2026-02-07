import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Router2 from './files/Router2'
import Router7 from './files/Router7';




function App() {

  return (
    // <BrowserRouter>

    //    <nav style={{ display: 'flex', gap: '20px', margin: '20px' }}>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/contact">Contact</Link>
    //    </nav>

    //    <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //    </Routes>
    // </BrowserRouter>

    <div>
      {/* <Router2 />   */}

      <Router7 />
      
    </div>
  )
}

export default App;
