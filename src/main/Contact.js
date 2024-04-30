import React from "react";
import "./contact.css";


export default function Contact() {
  return (
    <div className="contact-body">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">9876235648</div>
              <div className="text-two">6874345678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">academex@gmail.com</div>
              <div className="text-two">www.academex.com</div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>

            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="buttton">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
