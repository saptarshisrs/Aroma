/* eslint-disable */
import WSPGallery from './WSPGallery';
import g1 from "../assets/g1.jpg"; 
import g2 from "../assets/g2.jpg"; 
import g7 from "../assets/g7.jpg"; 
import g8 from "../assets/g8.jpg"; 
import g9 from "../assets/g9.jpg"; 
import g10 from "../assets/g10.jpg"; 
import g3 from "../assets/g3.JPG"; 
import g4 from "../assets/g4.JPG"; 
import g5 from "../assets/g5.JPG"; 
import g6 from "../assets/g6.JPG"; 
import g11 from "../assets/g11.jpg";
import g12 from "../assets/g12.jpg";
import g13 from "../assets/g13.jpg";
import g14 from "../assets/g14.jpg";
import g15 from "../assets/g15.jpg";
import g16 from "../assets/g16.jpg";
import g17 from "../assets/g17.jpg"; 
import g18 from "../assets/g18.jpg"; 
import g19 from "../assets/g19.jpg"; 
import g20 from "../assets/g20.jpg"; 
import my1 from "../assets/my1.jpg"; 
import my2 from "../assets/my2.jpg"; 
import my3 from "../assets/my3.jpg"; 
import my7 from "../assets/my7.jpg";
import f2 from "../assets/f2.jpg"; 
import f3 from "../assets/f3.jpg";  
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from './Footer';

const Gallery = () => {

  const marriageImages = [
    { img: g1 },
    { img: g6 },
    { img: g19 },
    { img: my1 }
  ];

  const birthdayImages = [
    { img: g14 },
    { img: g15},
    { img: g16 },
    { img: my7}
  ];

  const aromaImages = [
    { img: g2 },
    { img: g3 },
    { img: g5 },
    { img: g4 },
    { img: g7 },
    { img: g13 },
    { img: g18 },
    { img: g20 },
   ];

  const aromaCatering=[
    { img: g8 },
    { img: g9 },
    { img: g10 },
    { img: g11 },
    { img: g12 },
    { img: g17 },
    { img: f2 },
    { img: f3 }
  ]

  const suvecha=[
    { img: my1 },
    { img: my2 },
    { img: my3},
    { img: g19 },
    
  ]

  return (
    <div>
      <WSPGallery galleryImages={marriageImages} section="Marriage" />
      <WSPGallery galleryImages={birthdayImages} section="Birthday" />
      <WSPGallery galleryImages={aromaImages} section="Aroma" />
      <WSPGallery galleryImages={suvecha} section="Suvecha" />
      <WSPGallery galleryImages={aromaCatering} section="Catering" />
      <Footer/>
    </div>
  );
}
export default Gallery;