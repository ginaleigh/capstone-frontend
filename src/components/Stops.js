import React from "react";
import axios from "axios";
import Arrivals from "./Arrivals";

export default class StopList extends React.Component {
  state = {
    stop_data: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const stop_data = res.data;
      this.setState({ stop_data });
    });
  }

  render() {
    return (
      <div>
        {this.state.stop_data.map((stop, index) => (
          <div key={stop.name}>
            <b>{stop.name}</b>
            <p>{index}</p>
            <br></br>
            <p>Stops.js</p>
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
