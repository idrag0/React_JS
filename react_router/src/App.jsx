import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Router2 from './files/Router2'
import Router7 from './files/Router7';
import DynamicRouting9 from './files/DynamicRouting9';
import Api55 from '../../API_React_55/Api55';
import Integrate_Json_api from '../../API_React_55/Integrate_Json_api';




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

      {/* <Router7 /> */}
      {/* <DynamicRouting9 /> */}

      {/* <Api55 /> */}

      <Integrate_Json_api/>

    </div>
  )
}

export default App;
