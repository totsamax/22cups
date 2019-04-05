import React from "react";
import InputMask from "react-input-mask";
import "./Registration.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Registration = (props) =>{
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h2>Капучино, отличный выбор!</h2>
          <p>Для кого будем его готовить?</p>
          <form action="">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Ваше имя:</span>
              </div>

              <InputMask
                className="col-sm form-control"
                alwaysShowMask="true"
                mask="**************"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Телефон:</span>
              </div>

              <InputMask
                className="col-sm form-control"
                alwaysShowMask="true"
                mask="+7 (999) 999 99 99"
                maskChar=" "
              />
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => {
                props.history.push("/");
              }}
            >
              Заказать капучино всего за 1₽
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registration;
