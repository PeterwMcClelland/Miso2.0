import React, { useState, useEffect } from "react";
import "./work.scss";
import { Link } from "react-router-dom";
import { loremIpsum } from "lorem-ipsum";
import ScrollTrigger from "react-scroll-trigger";

function Work() {
  const [lorem, setLorem] = useState("");

  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  useEffect(() => {
    setLorem(
      loremIpsum({
        count: 10,
        units: "words",
      })
    );
  }, []);

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <main className="work-main">
        <div className="header-txt">
          <h1 className="work-h1">Our Work</h1>
          <p className="work-h2">{lorem}</p>
        </div>
        <div className="work-page">
          <div
            id="column"
            className={`column-1 ${animation ? "liftIntoPlace-column-1" : ""}`}
          >
            <Link to="/jawny">
              <div id="box-1" className="event-col box-1-hover">
                <div className="box-1-hover-txt">Jawny</div>
              </div>
            </Link>
            <Link to="/mereba">
              <div id="box-3" className="event-col">
                <div className="box-3-hover">
                  <div className="box-3-hover-txt">Mereba</div>
                </div>
              </div>
            </Link>
          </div>
          <div
            id="column"
            className={`column-2 ${animation ? "liftIntoPlace-column-2" : ""}`}
          >
            <Link to="/kingkrule">
              <div id="box-2" className="event-col">
                <div className="box-2-hover">
                  <div className="box-2-hover-txt">King Krule</div>
                </div>
              </div>
            </Link>
            <Link to="/freddiegibbs">
              <div id="box-4" className="event-col">
                <div className="box-4-hover">
                  <div className="box-4-hover-txt">Freddie Gibbs</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </ScrollTrigger>
  );
}

export default Work;
