import { useEffect, useState } from "react";
import axios from "axios";
import ArrivalList from "./Arrivals";
import styled from "styled-components";

import "./Stops.css";

// class components
// functional components -- hooks

const RedDiv = styled.div`
  background-color: red;
`

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

const StopList = () => {
  const [stops, setStops] = useState([]);
  const [lines, setLines] = useState([]);
  const [selectedStopId, setSelectedStopId] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const stops = res.data;
      setStops(stops);
      console.log(stops);
      axios.get(`http://localhost:3000/lines`).then((res) => {
        const lines = res.data;
        setLines(lines);
        console.log(lines);
      });
    });
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleStopChange = (event) => {
    console.log(event.target.value);
    setSelectedStopId(event.target.value);
  };

  return (
    <div className="test">
      <Dropdown informationBeforeDropdown="CTA Train Line" onChange={handleChange} trainData={lines} />
      <Dropdown informationBeforeDropdown="Train Stop" onChange={handleStopChange} trainData={stops} />
      <p></p>
      <b>Select train line and stop</b>

      {/* sent down the id as prop into arrival */}
      {selectedStopId !== undefined && <ArrivalList parentId={selectedStopId} />}
    </div>
  );
};

export default StopList;
