import React from "react";
import axios from "axios";

export default class TrainList extends React.Component {
  state = {
    trains: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const trains = res.data;
      this.setState({ trains });
    });
  }

  render() {
    return (
      <p>
        {this.state.trains.map((train) => (
          <div key={train.id}>
            {train.name}
            {train.description}
            {train.parent_id}
            {train.stop_id}
            {train.is_accessible}
            {train.towards_loop}
          </div>
        ))}
      </p>
    );
  }
}
