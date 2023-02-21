import React, { useState, useRef, useEffect } from "react";
import FormRsvp from "../FormRsvp";

const SectionWish = ({ guest }) => {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  const [showAttend, setShowAttend] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowAttend(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed, guest.status]);

  return (
    <div ref={sectionRef} className="w-full min-h-screen">
      <div>
        <h1>Hallo, {guest.name}</h1>
      </div>
      {showAttend && <FormRsvp guest={guest} setShowAttend={setShowAttend} />}
    </div>
  );
};

export default SectionWish;
