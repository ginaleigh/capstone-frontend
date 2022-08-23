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
  }

  render() {
    return (
      <div>
        <Dropdown
          label="CTA Train Line"
          onChange={this.handleChange}
          options={this.state.lines.map((line, index) => (
            <option value={line.id}>{line.color}</option>
          ))}
        />
        <Dropdown
          label="Train Stop"
          onChange={this.handleChange}
          options={this.state.stops.map((stop, index) => (
            <option value={stop.parent_id}>{stop.name}</option>
          ))}
        />
      </div>
    );
  }
}

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={Math.random()} value={option.value}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
