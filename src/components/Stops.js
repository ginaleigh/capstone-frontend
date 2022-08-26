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
    console.log(event.target.name);
  }

  // handleStopChange(event) {
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div>
        <Dropdown
          label="CTA Train Line"
          onChange={this.handleChange}
          options={this.state.lines.map((line) => line)}
          // value={this.state.lines.map((lineId) => lineId.id)}
        />
        <Dropdown label="Train Stop" onChange={this.handleChange} options={this.state.stops.map((stop) => stop.id)} />
      </div>
    );
  }
}

const Dropdown = ({ label, options, onChange }) => {
  return (
    <label>
      {label}
      <select onChange={onChange}>
        {options.map((option) => (
          <option key={Math.random()} value={option.id}>
            {option.color}
          </option>
        ))}
      </select>
    </label>
  );
};
