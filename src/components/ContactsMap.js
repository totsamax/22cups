import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, MarkerLayout } from "yandex-map-react";
import "./ContactsMap.scss";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

class ContactMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <div className="mapPanel">
        <div ref={ref => (this.el = ref)}>
          <div
            className="show-map"
            onClick={() =>
              this.setState({
                isPaneOpenLeft: true
              })
            }
          >
            <div className="show-map--button "> </div>
          </div>
          <SlidingPane
            closeIcon={
              <div className="closeIcon">
                <img src="data:image/png;base64,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" />
              </div>
            }
            isOpen={this.state.isPaneOpenLeft}
            from="bottom"
            width="100%"
            onRequestClose={() =>
              this.setState({
                isPaneOpenLeft: false
              })
            }
          >
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
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden"
                    }}
                  >
                    <img src="http://loremflickr.com/30/30" />
                  </div>
                </MarkerLayout>
              </Marker>
            </Map>
          </SlidingPane>
        </div>
      </div>
    );
  }
}
export default ContactMap;
