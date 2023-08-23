import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-txt">
        <h2>
          For any questions regarding shows or event promotion please email
          <br/>
          <a className="a-txt" href="mailto:info@misopresents.com">
            info@misopresents.com
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Contact;
