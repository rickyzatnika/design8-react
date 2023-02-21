import React, { useState, useRef, useEffect } from "react";
import FormRsvp from "../FormRsvp";
import useSWR from "swr";

const SectionWish = ({ guest }) => {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const userId = guest?.userId;

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
  }, [displayed, guest]);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: posts, error } = useSWR(
    `${process.env.REACT_APP_URI}/comment/${guest?.unique_Code}?userId=${userId}`,
    fetcher
  );
  useEffect(() => {}, [posts, error]);

  if (error) {
    return <div>Error Loading data...</div>;
  }

  return (
    <div ref={sectionRef} className="w-full min-h-screen">
      {showAttend && <FormRsvp guest={guest} setShowAttend={setShowAttend} />}
      {/* Comment Section */}
      <div className="w-9/12 mx-auto"></div>
    </div>
  );
};

export default SectionWish;
