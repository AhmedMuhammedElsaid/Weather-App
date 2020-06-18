import React from "react";
import styled from "styled-components";
import WeatherCard from "./WeatherCard";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { getDay } from "../Store/actions";

const Container = styled.div`
  max-width: 75%;
  @media (max-width: 575.98px){
    max-width:80%
  }
`;

const Carousel = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  let cards = data.map((item, i) => {
    return (
      <div key={i} onClick={() => dispatch(getDay(i))}>
        <WeatherCard date={item[0].dt} day={item} />
      </div>
    );
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>{cards}</Slider>
    </Container>
  );
};

export default Carousel;
