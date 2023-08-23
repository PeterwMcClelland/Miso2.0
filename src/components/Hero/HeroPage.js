import React, { useState, useEffect, useRef } from "react";
import "./heropage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loremIpsum } from "lorem-ipsum";
import {
  faClock,
  faTicket,
  faLocationDot,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const clock = <FontAwesomeIcon icon={faClock} />;
const ticket = <FontAwesomeIcon icon={faTicket} />;
const location = <FontAwesomeIcon icon={faLocationDot} />;
const downArrow = <FontAwesomeIcon icon={faArrowDownLong} />;

function HeroPage() {
  const showRef = useRef(null);
  const [lorem, setLorem] = useState("");

  const scrollToShows = () => {
    if (showRef.current) {
      showRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setLorem(
      loremIpsum({
        count: 35,
        units: "words",
      })
    );
  }, []);

  return (
    <div className="shows-background">
      <body className="hero-page">
        <div className="show-btn-container">
          <div className="shows-button" onClick={scrollToShows}>
            Shows
          </div>
          <div className="down-arrow">{downArrow}</div>
        </div>
      </body>
      <div ref={showRef} className="show-page">
        <h1>Upcoming</h1>
        <div className="three-columns">
          {/* column 1 */}
          <div className="column">
            <div className="artist-card">
              <Link to="/jawny">
                <div className="img-jawny">8/23/23</div>
              </Link>
              <h2 className="h2-artist">Jawny</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <Link to="/jawny">
                    <div id="button-blue" className="button">
                      Buy Tickets
                    </div>
                  </Link>
                  <Link to="/jawny">
                    <div id="button-info" className="button">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <Link to="/mereba">
                <div className="img-mereba">1/12/24</div>
              </Link>
              <h2 className="h2-artist">Mereba</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <Link to="/mereba">
                    <div id="button-blue" className="button">
                      Buy Tickets
                    </div>
                  </Link>
                  <Link to="/mereba">
                    <div id="button-info" className="button">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className="column">
            <div className="artist-card">
              <Link to="/freddiegibbs">
                <div className="img-freddie">10/14/23</div>
              </Link>
              <h2 className="h2-artist">Freddie Gibbs</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <Link to="/freddiegibbs">
                    <div id="button-blue" className="button">
                      Buy Tickets
                    </div>
                  </Link>
                  <Link to="/freddiegibbs">
                    <div id="button-info" className="button">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <Link to="/kingkrule">
                <div className="img-king">3/20/24</div>
              </Link>
              <h2 className="h2-artist">King Krule</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <Link to="/kingkrule">
                    <div id="button-blue" className="button">
                      Buy Tickets
                    </div>
                  </Link>
                  <Link to="/kingkrule">
                    <div id="button-info" className="button">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* column 3 */}
          <div id="announc-h1" className="column">
            Announcements
            <p className="announc-txt">{lorem}</p>
            <br />
            <p className="announc-txt">{lorem}</p>
            {/* <div className="detail-image"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
