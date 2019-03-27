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
          <button onClick={() => this.setState({ isPaneOpen: true })}>
            Click me to open right pane!
          </button>
          <div style={{ marginTop: "32px" }}>
            <button onClick={() => this.setState({ isPaneOpenLeft: true })}>
              Click me to open left pane with 20% width!
            </button>
          </div>
          <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={this.state.isPaneOpen}
            title="Hey, it is optional pane title.  I can be React component too."
            subtitle="Optional subtitle."
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              this.setState({ isPaneOpen: false });
            }}
          >
            <div>And I am pane content. BTW, what rocks?</div>
            <br />
            <img src="img.png" />
          </SlidingPane>
          <SlidingPane
            closeIcon={<div>Some div containing custom close icon.</div>}
            isOpen={this.state.isPaneOpenLeft}
            title="Hey, it is optional pane title.  I can be React component too."
            from="bottom"
            width="100%"
            onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
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
                  <div style={{ borderRadius: "50%", overflow: "hidden" }}>
                    <img src="http://loremflickr.com/30/30" />
                  </div>
                </MarkerLayout>
              </Marker>
            </Map>
          </SlidingPane>
        </div>
        ;
      </div>
    );
  }
}
export default ContactMap;
