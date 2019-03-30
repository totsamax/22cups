/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CoffeList.scss";

const CoffeList = props => {
  var coffes = props.coffes;
  const coffeslist = coffes.length ? (
    coffes.map(coffe => {
      return (
        <Card key={coffe.key}>
          <span className="cardTitle">{coffe.title}</span>
          <img width="100%" src={coffe.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <span>{coffe.vol}</span> ml за <span>{coffe.price}</span>&#x20bd;
            </CardTitle>
          </CardBody>
        </Card>
      );
    })
  ) : (
    <p className="text-center">Выберите свою кофейню</p>
  );
  return (
    <div>
      <Carousel
        centerMode
        centerSlidePercentage={70}
        emulateTouch
        showArrows={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        {coffeslist}
      </Carousel>
    </div>
  );
};

export default CoffeList;
