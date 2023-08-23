import React, { useState, useEffect } from "react";
import "./workhistory.scss";
import { loremIpsum } from "lorem-ipsum";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTicket,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const clock = <FontAwesomeIcon icon={faClock} />;
const ticket = <FontAwesomeIcon icon={faTicket} />;
const location = <FontAwesomeIcon icon={faLocationDot} />;

function FreddieGibbs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lorem, setLorem] = useState("");
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setLorem(
      loremIpsum({
        count: 35,
        units: "words",
      })
    );
  }, []);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div
        className={`work-history ${
          animation ? "slideInFromLeft-work-history" : ""
        }`}
      >
        <div className="freddie-img"></div>
        <div className="bio-txt">
          <h1 className="bio-h1">Freddie Gibbs</h1>
          <br />
          <h3>Austin, TX</h3>
          <br />
          <p>{lorem}</p>
          <br />
          <p>{lorem}</p>
          <br />
          <div className="details">
            <div className="text-details">
              <h3>Details</h3>
              <ul className="scope">
                <li>{clock} Doors: 7pm - Show 8pm</li>
                <li>{ticket} Tickets: $30</li>
                <li>{location} Location: 25 E 28th St</li>
              </ul>
            </div>
            <div className="detail-image"></div>
          </div>
          <div id="button-blue-prof" className="button-prof">
            Buy Tickets
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default FreddieGibbs;
