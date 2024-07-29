import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Information from './components/Information/Information';
import Home from './components/Home/Home';
import About from './components/About/About';


function App ()  {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/kitchenX' element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/information" element={<Information/>} />
        </Routes>
      </Router>
      </>
    );
  }
    export default App
    


