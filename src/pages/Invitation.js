import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import React, { lazy, Suspense } from 'react';
import axios from "axios";

const Header = lazy(() => import("../components/Invitations/Header"))
const SectionTwo = lazy(() => import("../components/Invitations/SectionTwo"))
const SectionThree = lazy(() => import("../components/Invitations/SectionThree"))
const SectionFour = lazy(() => import("../components/Invitations/SectionFour"))
const SectionFive = lazy(() => import("../components/Invitations/SectionFive"))
const SectionWish = lazy(() => import("../components/Invitations/SectionWish"))
const SubFooter = lazy(() => import("../components/Invitations/SubFooter"))
const Footer = lazy(() => import("../components/Invitations/Footer"))

const Invitation = () => {

  const { uuid } = useParams();
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: guest, error } = useSWR(
    `${process.env.REACT_APP_URI}/invitation/${uuid}`,
    fetcher
  );
  useEffect(() => { }, [guest, error]);

  const [imageUrl, setImageUrl] = useState([]);
  const getImageUrl = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiSecret = process.env.REACT_APP_API_SECRET;
    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    const auth = btoa(`${apiKey}:${apiSecret}`);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URI}/v1_1/${cloudName}/resources/image`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      console.log(response.data.resources)
      setImageUrl(response.data.resources);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImageUrl();
  }, []);

  if (error) {
    return <div>Error Loading data...</div>;
  }

  return (

    <>
      <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center bg-white">
        <img src="/loading.svg" alt="loading" className="w-2/5 mx-auto" />
      </div>}>
        <Header guest={guest} imageUrl={imageUrl} />
        <SectionTwo />
        <SectionThree imageUrl={imageUrl} />
        <SectionFour />
        <SectionFive imageUrl={imageUrl} />
        <SectionWish guest={guest} />
        <SubFooter imageUrl={imageUrl} />
        <Footer />
      </Suspense>
    </>

  )
}

export default Invitation