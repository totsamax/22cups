import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, MarkerLayout } from "yandex-map-react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import "./ContactsMap.scss";

class ContactMap extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: "Closed" };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
    
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className="mapPanel">
        <div id="toggler">Toggle</div>
        <UncontrolledCollapse toggler="#toggler">
          <Map
            onAPIAvailable={function() {
              console.log("API loaded");
            }}
            center={[55.754734, 37.583314]}
            zoom={10}
            width={"100%"}
            height={"500px"}
          >
            <Marker lat={55.783379} lon={37.775575}>
              <MarkerLayout>
                <div style={{borderRadius: "50%", overflow: "hidden"}}>
                  <img src="http://loremflickr.com/30/30" />
                </div>
              </MarkerLayout>
            </Marker>
          </Map>
        </UncontrolledCollapse>
      </div>
    );
  }
}
export default ContactMap;
