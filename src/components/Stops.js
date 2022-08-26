import React from "react";
import axios from "axios";
// import dropdown from "Dropdown"

// import Arrivals from "./Arrivals";

export default class StopList extends React.Component {
  state = {
    lines: [],
    stops: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const stops = res.data;
      this.setState({ stops });
      console.log(stops);
      axios.get(`http://localhost:3000/lines`).then((res) => {
        const lines = res.data;
        this.setState({ lines });
        console.log(lines);
      });
    });
  }

  handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.name);
  }

  handleStopChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Dropdown
          informationBeforeDropdown="CTA Train Line"
          onChange={this.handleChange}
          trainData={this.state.lines}
        />
        <Dropdown informationBeforeDropdown="Train Stop" onChange={this.handleStopChange} trainData={this.state.stops} />
      </div>
  
    );
  }
}

const Dropdown = ({ informationBeforeDropdown, trainData, onChange }) => {
  return (
    <label>
      {informationBeforeDropdown}
      <select onChange={onChange}>
        {trainData.map((train) => (
          <option key={Math.random()} value={train.id}>
            {train.name}
          </option>
        ))}
      </select>
    </label>
  );
};
