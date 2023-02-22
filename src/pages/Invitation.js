import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import React, { lazy, Suspense } from 'react';

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

  if (error) {
    return <div>Error Loading data...</div>;
  }

  return (

    <>
      <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center bg-white">
        <img src="/loading.svg" alt="loading" className="w-2/5 mx-auto" />
      </div>}>
        <Header guest={guest} />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionWish guest={guest} />
        <SubFooter />
        <Footer />
      </Suspense>
    </>

  )
}

export default Invitation