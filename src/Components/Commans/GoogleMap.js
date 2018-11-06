import React, { PureComponent } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "50%",
  height: "100%",
  left: "50%"
};

export class MapContainer extends PureComponent {
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(e =>
      this.props.actions.saveLocation(e)
    );
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        center={{
          lat: this.props.remarkObj.lat,
          lng: this.props.remarkObj.lng
        }}
        style={style}
      >
        <Marker
          position={{
            lat: this.props.remarkObj.lat,
            lng: this.props.remarkObj.lng
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY"
})(MapContainer);
