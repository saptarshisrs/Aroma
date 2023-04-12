/* eslint-disable */
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // import NavLink instead of Link
import "./NavTop.css";
import Aroma123 from "../assets/AROMA123.png";

export default function NavTop() {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize > 768) {
  return (
    <>
      <Navbar bg="light" expand="md" className="navbar-custom" style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Navbar.Brand href="/home" className='ml-auto aro'>
          <img src={Aroma123} alt="Aroma" height="50" width="100"/>
          <b> AROMA</b>
        </Navbar.Brand>
        
        <Nav className="mr-10" style={{ display: "flex" }}>
          <NavLink to="/home" className="nav-link" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration:isActive?"underline":"",
              color: isPending ? "red" : "black",
              
            };
          }}>Home</NavLink> {/* use NavLink, add activeClassName */}
          <NavLink to="/menu" className="nav-link" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration:isActive?"underline":"",
              color: isPending ? "red" : "black",
              
            };
          }}>Menu</NavLink> {/* use NavLink, add activeClassName */}
          <NavLink to="/gallery" className="nav-link" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration:isActive?"underline":"",
              color: isPending ? "red" : "black",
              
            };
          }} >Gallery</NavLink> {/* use NavLink, add activeClassName */}
          <NavLink to="/about" className="nav-link" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration:isActive?"underline":"",
              color: isPending ? "red" : "black",
              marginRight: "40px"
            };
          }} >T&C</NavLink> {/* use NavLink, add activeClassName */}
          <Nav>
          <NavLink to="/book" className="nav-link"><button style={{ fontSize: "18px", backgroundColor: "#F04401", borderRadius: "20px", border: "1px solid #F04401",color: "#fff"  }} >Book now</button></NavLink> {/* use NavLink */}
        </Nav>
        </Nav>

      </Navbar>
    </>
  )
}else{
  return(
  <nav style={{ backgroundColor: '#f5a300d3', position: 'sticky', top: 0, zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
        <NavLink to="/home" style={{ textDecoration: 'none', fontWeight: 'bold',color:'black'}}>
          AROMA
        </NavLink>
        <div>
          <NavLink to="/book" style={{  textDecoration: 'none' }}>
            <button style={{ fontSize: '18px', backgroundColor: '#F04401', borderRadius: '20px', border: '1px solid #F04401', color: '#fff' }}>
              Book now
            </button>
          </NavLink>
        </div>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 ,justifyContent:'space-evenly',padding: '10px 20px'}}>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/home" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            // color: isActive ? 'red' : 'black'
            color:'black'
          })}>
            Home
          </NavLink>
        </li>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/menu" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            // color: isActive ? 'red' : 'black'
            color:'black'
          })}>
            Menu
          </NavLink>
        </li>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/gallery" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            // color: isActive ? 'red' : 'black'
            color:'black'
          })}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            // color: isActive ? 'red' : 'black'
            color:'black'
          })}>
            T&C
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
}
