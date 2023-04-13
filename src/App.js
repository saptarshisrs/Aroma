import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from './pages/Gallery';
import NavTop from './components/NavTop';
import Slider from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Menu from './pages/Menu';
import About from './pages/T&C';
import Book from './pages/Book';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavTop />
        <Routes>
          <Route exact path="/" element={<Slider />}></Route>
          <Route path="/home" element={<Slider />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </Router>
      <div className="App">
        <TawkMessengerReact
          propertyId="642eb3eb31ebfa0fe7f6d764"
          widgetId="1gtb6tl9i" />
      </div>
      {/* <Footer /> */}
      

    </>
  );
}

export default App;


