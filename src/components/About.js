/* eslint-disable */
import React from "react";
import "./About.css";
import Footer from "../components/Footer";
import Aro from "../assets/AR.mp4";

const ContactPage = () => {
  return (
    <>
      <div className="about">
        <h1>AROMA CATERER AND DECORATORS(Since 1991)</h1>
        <br />
        <div
          className="parent-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="imga">
            <video autoPlay muted width={window.innerWidth} height="360">
              <source src={Aro} type="video/mp4" />
            </video>
            {/* <img src={AROMA} alt="alt" /> */}
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          <h1>House Booking Terms and Conditions</h1>
          <div className="bodytc">
          <ol>
            <li>
              An amount of Rs 10,000/- (rupees ten thousands only) is to be paid
              for booking, balance amount must be paid 7 days before occasion.
              Booking money is refundable only if rebooking of the house is done
              on the same date by any other entity and cancellation letter must
              be submitted. Timing is 8am to 7 am (i.e. 23 hours).
            </li>
            <li>
              Water, light, fans, 100 pcs chair and cover, 10 pcs dining table,
              reception hall with 3 pcs sofa set, & Kitchen tent (for Suvecha).
            </li>
            <li>
              Extra table, chair, sofa, flower gate, flower dais, outside light,
              Pandal, carpeting, flower background, wooden throne and other
              charges are extra, which will be supplied by us within reasonable
              prices. Outside suppliers & caterers are not allowed.
            </li>
            <li>
              Using of duct tapes, nails on furniture and wall are prohibited,
              fines will have to be paid for any kind of damage to property.
            </li>
            <li>
              Electric cost of Coffee machine, grinder machine, geyser and video
              point is extra and at the time of blackout all appliances will be
              disabled. Air-conditioner charges for 6 hours per AC is Rs 1000/-
              (including electric charge). In case of power cut total 40 pcs of
              fan and light will be provided inside house for 2 hrs by inverter
              system.
            </li>
            <li>
              Dinner must be completed within 11:30 pm. We do not allow loud
              sound from 10 pm, outside sound box, DJ, singer, dancer, fire
              crackers, etc are not allowed. Consumption of alcohol is not
              allowed.
            </li>
            <li>
              We are not responsible for your gift items, ornaments and luggage.
              Car parking is your responsibility.
            </li>
            <li>
              We are not responsible for any natural calamity (act of god).
            </li>
            <li>
              Rules and regulation can be changed to maintain the social and
              environmental decorum and for a peaceful occasion and your
              well-being.
            </li>
          </ol>
         
          <div className="aboutmain">
            <p>
              If you are satisfied with the above said terms and condition then
              you may proceed for booking.
            </p>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
