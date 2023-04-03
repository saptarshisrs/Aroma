/* eslint-disable */
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./About.css";
import aromalogo1 from "../assets/aromalogo1.jpg"; 

const ContactPage = () => {
  return (
    <>
      <div className='about'>
        <h1>AROMA CATERER AND DECORATORS</h1><br />
        <div className='imga'>
        <img src={aromalogo1} alt="alt" />
        </div>
        <p>Since 1991 we are bringing joy to our customers.We at aroma tends to provide best of services at nominal prices.Leave all worries to us and enjoy your occasion.Sincerely aroma. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quasi placeat minus animi perferendis quibusdam, debitis sed dolorem error pariatur corporis autem rerum ut expedita. Esse similique nobis labore rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi impedit natus, veritatis unde similique molestias dolor animi nihil molestiae quia aspernatur, doloribus dicta tempora. Nostrum, eos quisquam, necessitatibus unde earum cumque ratione eius labore reprehenderit nemo adipisci explicabo, ullam ad quod quae voluptatum et! Doloribus nobis magnam accusantium? Aliquam vel fugit tempore, velit magnam nisi optio eveniet corporis neque tenetur quibusdam consectetur in. Architecto nobis veritatis ea porro atque laborum repellendus accusantium! Sunt laborum eos dolorem temporibus nihil ut. Adipisci, consequuntur. Ipsa qui vitae quo. Modi fugiat et impedit nisi nihil totam reprehenderit voluptate aliquid dolorum quasi ducimus, excepturi eos, voluptatibus sunt eligendi! Amet veniam iste optio fugiat deserunt saepe magnam ratione earum cum voluptatem, mollitia ducimus autem quod ab suscipit, at, quis recusandae perferendis possimus molestias cupiditate ex? Veritatis ex praesentium nihil quo quibusdam obcaecati illo aliquam repellendus voluptatem impedit velit molestiae cumque est nobis, perferendis eligendi facilis iure similique? Neque, voluptatibus vel. Quae, nulla, quisquam soluta distinctio commodi quod illum, nihil itaque corrupti enim atque sint inventore eaque praesentium natus cupiditate aut? Velit perspiciatis, quod illo dolorum facilis eum quaerat praesentium adipisci? Aperiam animi, necessitatibus est ullam eligendi nostrum debitis. Deserunt id iusto impedit, odio ad reiciendis facilis, veritatis nulla quos cum pariatur vero dolores fuga saepe soluta perspiciatis veniam odit consectetur. Libero minus optio, neque repellendus dignissimos eius animi illo mollitia totam delectus nemo incidunt praesentium ratione veniam voluptates corporis maxime molestias excepturi, sequi soluta saepe tempora repellat. Exercitationem, eveniet. Dolore, aliquam? Aperiam ducimus voluptates dolor eius quidem corporis accusantium, fugit ipsa?</p>
      </div>
      <div className="contact-page">
        <h2>Contact Us</h2>
              <p>If you have any questions or concerns, feel free to reach out to us!</p>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i>12 Laxmi Narayan Motitlal Road,Behala,Kolkata-700061</li>
                <li><i className="fas fa-phone"></i> (+91) 9231684345/8013572929</li>
                <li><i className="fas fa-envelope"></i> aroma@gmail.com</li>
              </ul>
              <div>
              <Button className="mx-3" variant="warning" href="mailto:email@example.com">Email Us</Button>
              <Button className="btn-facebook mx-3" variant="outline-primary" href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </Button>

              <Button className="btn-instagram mx-3" variant="outline-primary" href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </Button>
              <Button variant="outline-primary mx-3" href="https://twitter.com/" className="twitter-button">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </Button>
              </div><br />
              <div className="qr-code">
                <QRCodeCanvas value="https://www.example.com" size={128} />
              </div>
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.3915925236697!2d88.3050311!3d22.4894864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a6a859e740b%3A0xc2a3d2e855f3c9f1!2sAroma%20Festive%20Hall!5e0!3m2!1sen!2sin!4v1680444609220!5m2!1sen!2sin" width={window.innerWidth} height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* console.log */}
      </div>


    </>
  );
};

export default ContactPage;





