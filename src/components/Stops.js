import React from "react";
import axios from "axios";
import Arrivals from "./Arrivals";

export default class StopList extends React.Component {
  state = {
    stops: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const stops = res.data;
      this.setState({ stops });
    });
  }

  render() {
    return (
      <div>
        <select>
          {this.state.stops.map((stop, index) => (
            <option value={stop.parent_id}>{stop.name}</option>
          ))}
        </select>
      </div>
    );
  }
}
