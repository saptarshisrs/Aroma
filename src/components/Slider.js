/* eslint-disable */
import "./Slider.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import AROMA from "../assets/AROMA.png";
import Badge from 'react-bootstrap/Badge';
import my1 from "../assets/my1.jpg";
import g2 from "../assets/g2.jpg";
import { QRCodeCanvas } from 'qrcode.react';
import {  Button } from 'react-bootstrap';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import my5 from "../assets/my5.jpg";
import my7 from "../assets/my7.jpg";
import g8 from "../assets/g8.jpg";
import './slider1.css'

const Slider = () => {

 
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const data = [
    {
      id: "1",
      title: "mocktail",
      img: g8,
    },
    {
      id: "2",
      title: "hall", 
      img: my5,
    },
    {
      id: "3",
      title: "aroma",
      img: my7,
    },
  ];

  return (
    <>
    <div className="slider-container">
      <AutoplaySlider
        play={true}
        animation="fallAnimation"
        cancelOnInteraction={false}
        interval={3000}
      >
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </AutoplaySlider>
     
    </div>
    
    <div className="about">
      <br /><br />
    <h1>AROMA CATERER AND DECORATORS(Since 1991)</h1><br />
        <div className="parent-container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="imga">
            <img src={AROMA} alt="alt" />
          </div>
        </div>
        <div className='aboutmain'>
          <p>For over three decades now, we have been spreading happiness and delighting our customers with our impeccable services. At Aroma, our top priority is to provide you with the best possible experience at the most reasonable prices. So sit back, relax, and let us take care of all the details while you enjoy your special occasion. Trust us to make your event truly unforgettable. With warm regards, Aroma. </p>
          <p>We are delighted to offer you the choice of two elegant banquet halls and one guest house for your special occasion - one located near Sakherbazaar metro station and another near Jayrampur Post Office. Our team is dedicated to providing you with an unforgettable experience, and we offer a range of exquisite decoration options at affordable prices, as well as hassle-free catering services. Let us take care of all the details so you can relax and enjoy your big day to the fullest!</p>
        </div>
        <div className="housechoices">
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" className='card-img' src={g2} />
            <Card.Body>
              <Card.Title>Aroma Festive Hall</Card.Title>
              <div><h6>Address:12, Lakshmi Narayana Motilal Rd, Ramnarayan Government Colony, Behala, Kolkata, West Bengal 700061</h6></div>
              <Card.Text>
                Our elegant banquet hall exudes a timeless charm and is the perfect venue for your special occasion. With its exquisite decor and luxurious ambiance, it promises to create unforgettable memories for you and your guests.
              </Card.Text>
              <div className="center-badge">
                <Badge bg="dark" className='large-badge'>
                  Near Joyrampur Post office
                </Badge>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" className='card-img' src={my1} />
            <Card.Body>
              <Card.Title>Suvecha Ceremonial House</Card.Title>
              <div><h6>Address:124, Sabarna Para Rd, near barisha, Subodh Pally, Paschim Barisha, Kolkata, West Bengal 700008</h6></div>
              <Card.Text>
                Our modern banquet hall boasts sleek and stylish interiors that create a chic and contemporary atmosphere for your event. Equipped with state-of-the-art facilities, it is the perfect choice for those looking for a sophisticated and memorable celebration.
              </Card.Text>
              <div className="center-badge">
                <Badge bg="dark" className='large-badge'>
                  Near Behala Sakherbazaar
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </div>
    </div>
    <div className="test">
      <h1>TESTIMONIALS</h1>
      <hr/>
      <div className="cards">
        
      <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>Aroma Caterers and Decoraters</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>This review is specifically about the Aroma Caterers and Decoraters, which is owned and managed by Mr. Pranab Sinha. Apart from being an absolute gentleman, the quality of the food was awesome. We have known Mr. Sinha since 2014.Its safe to say that the quality has been maintained, and at a very competitive price.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by ABHIJIT GHOSH</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted a year ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>A very good hall</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>A very good hall for domestic ceremonies  like wedding. Its ideal when number of guest is less than 300. Rent and cost is flexible as per requirements. I think it is reasonable. Though it is not on or very near to the main road, cars can easily come here.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Debajyoti Mukherjee</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 4 year ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>All sorts of occasions</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>A cozy festive hall with lots of space available for use at reasonable and affordable rates for all sorts of occasions.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Judhajeet Biswas</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 4 year ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>large area</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>Spacious, with a good number of rooms and a large open area, it's a good place to host any kind of celebration.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Sulagna Halder</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 2 year ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>Great service</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>I had a great experience with this company. The staff was friendly and helpful, and the service was excellent.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Swarnali Sinha</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 5 months ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>AC available</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>It has a big ample space inside because of more seating arrangement if not served as boofey for any occasion. There is also AC available. Situated beside Jayrampur Post Office.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Shouvik Basu (RIK)</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 5 months ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>The grand dinner was excellent</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>I got married here on 27th January 2023. My brother and I used to have regular interactions with the owner, Mr. Pranab Sinha regarding the ways I would really wish the house to be decorated on my special day. All the requests were taken care of. The decorations proved to be great for us .</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Soumi Das</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted a month ago</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="review-card " border="secondary" bg="light">
      <Card.Body>
        <br />
        <Card.Title>The guest is having three big size bedroom</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">⭐️⭐️⭐️⭐️⭐️</Card.Subtitle>
        <Card.Text>We stayed there from 3rd to 8th Oct 22.The guest is having three big size bedroom and about 11x23 feet hall  with two attached bathrooms .The compound is having adequate open space. This is very suitable for arranging marraige and reception and any other occasions.It was a pleasant experience.</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">by Sanjit Kumar Das</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted text-end">posted 5 months ago</Card.Subtitle>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div className="contact-page">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us!</p>
        <ul className="contact-info">
          <li><i className="fas fa-map-marker-alt"></i>12 Laxmi Narayan Motitlal Road,Behala,Kolkata-700061</li>
          <li><i className="fas fa-phone"></i> (+91) 9231684345/8013572929</li>
          <li><i className="fas fa-envelope"></i> aromafestivehall1@gmail.com</li>
        </ul>
        <div>
          <Button className="mx-3" variant="warning" href="mailto:aromafestivehall1@gmail.com">Email Us</Button>
          <Button className="btn-facebook mx-3" variant="outline-primary" href="https://www.facebook.com/profile.php?id=100090292629394">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Button>

          <Button className="btn-instagram mx-3" variant="outline-primary" href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Button>
          <Button className="btn-whatsapp mx-3" variant="outline-success" href="https://wa.me/918013572929">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
        </div><br />
        <div className="qr-code">
          <QRCodeCanvas value="https://www.example.com" size={128} />

        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.3915925236697!2d88.3050311!3d22.4894864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a6a859e740b%3A0xc2a3d2e855f3c9f1!2sAroma%20Festive%20Hall!5e0!3m2!1sen!2sin!4v1680444609220!5m2!1sen!2sin" width={window.innerWidth / 3} height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14746.517988791275!2d88.3075161!3d22.4805532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bf042a845ef%3A0x6f5ad9dcb9f520dd!2sSuvecha%20Cerimonial%20House!5e0!3m2!1sen!2sin!4v1680797443681!5m2!1sen!2sin" width={window.innerWidth / 3} height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <Footer/>
    </>
  );
};

export default Slider;
