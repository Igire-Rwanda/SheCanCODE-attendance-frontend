import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container text-white">
        <div className="container-fluid container-fluid-footer">
          <div className="row footer-container-part1">
            <div className="footer-left  col-4 col-sm-12 col-md-6 col-lg-4 mb-4 ">
              <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065641/samples/Attendance%20pict/logos1_v3xdrc.png" alt="logo" className="logo-footer" />
              <p className="text-white">
                SheCanCode is on a mission to close the tech gender gap, by
                inspiring more women to enter, remain and excel in the tech
                industry
              </p>
            </div>
          
            <div className="footer-middle col-2 col-sm-12 col-md-6 col-lg-4 mb-4">
              <h1 className="mb-5">Useful link</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="contact-info col-4  col-sm-12 col-md-6 col-lg-4 mb-4">
            <h1 className="mb-5">Contact Info</h1>
            <ul>
              <li><FontAwesomeIcon icon={faHome} style={{ fontSize: "16px" }} className ="px-3"  /> Kacyiru, KG Av,Kigali-Rwanda</li>
              <li><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "16px" }} className ="px-3" /> Info@Igire.rw </li>
              <li><FontAwesomeIcon icon={faPhone} style={{ fontSize: "16px" }} className ="px-3" /> +250786774605</li>
            </ul>  
             </div>
          </div>
        </div>
        <hr className="horizontal-line-rule"></hr>
        <div className="copytight-container">
          <div className="footer-copyright">
            <p className="text-white">
              &copy; copyright IGIRE RWANDA ORGANIZATION 2022. All right
              reserved
            </p>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-right-link">
              <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065577/samples/Attendance%20pict/facebook_anoplp.webp" className="contact-us-icon1" />
            </a>
            <a href="#" className="footer-right-link">
              <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065745/samples/Attendance%20pict/twitter_e7umxz.webp" className="contact-us-icon" />
            </a>
            <a href="#" className="footer-right-link">
              <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065626/samples/Attendance%20pict/linked_fipqgy.png" className="contact-us-icon"/>
            </a>
            <a href="#" className="footer-right-link">
              <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665406929/samples/Attendance%20pict/you_e33pwf.png" className="contact-us-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
