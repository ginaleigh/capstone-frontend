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
        {this.state.stops.map((stop) => (
          <div key={stop.name}>
            <b>{stop.name}</b>
            <br></br>
            {stop.parent_id}
            <br></br>
            {stop.is_accessible}
            {stop.towards_loop}
            <Arrivals parentId={stop.parent_id} />
          </div>
        ))}
      </div>
    );
  }
}
