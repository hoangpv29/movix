import React, { useState } from "react";
import ContenWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabchange = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContenWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movie", "TV Shows"]} onTabChange={onTabchange} />
      </ContenWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
