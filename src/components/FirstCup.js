import React, { Component } from "react";
import CoffeList from "./CoffeList";
import ContactsMap from "./ContactsMap";
import "./FirstCup.scss";
class FirstCup extends Component {
  state = {
    coffes: [
      {
        img: "./img/1.jpg",
        key: 1,
        title: "Нежнейший капучино",
        vol: 200,
        price: 250
      },
      {
        img: "./img/1.jpg",
        key: 2,
        title: "Бодрый двойной эспрессо",
        vol: 150,
        price: 100
      },
      {
        img: "./img/1.jpg",
        key: 3,
        title: "Так себе латте",
        vol: 250,
        price: 200
      },
      {
        img: "./img/1.jpg",
        key: 4,
        title: "Нежнейший капучино",
        vol: 200,
        price: 250
      },
      {
        img: "./img/1.jpg",
        key: 5,
        title: "Бодрый двойной эспрессо",
        vol: 150,
        price: 100
      },
      {
        img: "./img/1.jpg",
        key: 6,
        title: "Так себе латте",
        vol: 250,
        price: 200
      },
      {
        img: "./img/1.jpg",
        key: 7,
        title: "Нежнейший капучино",
        vol: 200,
        price: 250
      },
      {
        img: "./img/1.jpg",
        key: 8,
        title: "Бодрый двойной эспрессо",
        vol: 150,
        price: 100
      },
      {
        img: "./img/1.jpg",
        key: 9,
        title: "Так себе латте",
        vol: 250,
        price: 200
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm text-left">
            <h1> Первый кофе всего за 1₽ </h1>
            <p>
              Выберете ваш любимый напиток и мы угостим вас по символической
              цене.Мы уверены, что вы вернетесь
            </p>
            <CoffeList coffes={this.state.coffes} /> <br />
            <p>
              Ваша кофейня по адресу: <span> Воздвиженка 4 / 7 стр1 </span>
            </p>
          </div>
          <div className="col-sm">
            <ContactsMap />
          </div>
        </div>
      </div>
    );
  }
}
export default FirstCup;
