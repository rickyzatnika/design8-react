import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Header, SectionTwo, SectionThree, SectionFour, SectionFive, SectionWish } from '../components'

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

  if (!guest) {
    return <div className="absolute top-0 left-0">Loading...</div>;
  }


  return (

    <>
      <Header guest={guest} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionWish guest={guest} />
    </>

  )
}

export default Invitation