import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import NavTop from './components/NavTop';
import Slider from './components/Slider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Menu from './components/Menu';
import WSPGallery from './components/WSPGallery';
import About from './components/About';
import Book from './components/Book';
import g1 from "./assets/g1.jpg"; 
import g2 from "./assets/g2.jpg"; 
import g7 from "./assets/g7.jpg"; 
import g8 from "./assets/g8.jpg"; 
import g9 from "./assets/g9.jpg"; 
import g10 from "./assets/g10.jpg"; 


function App() {
  const galleryImages = [
    {
      img: g1
    },
    {
      img: g2
    },
    {
      img: g7
    },
    {
      img: g8
    },
    {
      img: g9
    },
    {
      img:g10
     }
  ]
  return (
    <>
   
      
      <Router>
      <NavTop/>
      <Routes>
        <Route exact path="/" element={<Slider/>}></Route>
        <Route   path="/home" element={<Slider/>} />
          <Route  path="/Menu" element={<Menu/>} />
          <Route  path="/Gallery" element={<WSPGallery
        galleryImages={galleryImages}
      />} />
          <Route  path="/About" element={<About/>} />
          <Route  path="/Book" element={<Book/>} />
        
      </Routes>
    </Router>
    {/* <Menu/> */}
    <Footer/>
    
    </>
  );
}

export default App;
