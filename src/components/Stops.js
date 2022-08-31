import { useEffect, useState } from "react";
import axios from "axios";
import ArrivalList from "./Arrivals";
import "./stops.css";
// import styled from "styled-components";

// class components
// functional components -- hooks

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
  const [isAccessible, setIsAccessible] = useState();
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
    for (let i = 0; i < stops.length; i++) {
      if (stops[i].id === parseInt(event.target.value)) {
        setIsAccessible(stops[i].is_accessible);
        console.log(stops[i].is_accessible);
      }
    }
  };

  return (
    <div className="drop">
      <Dropdown informationBeforeDropdown="CTA Train Line" onChange={handleChange} trainData={lines} />
      <Dropdown informationBeforeDropdown="Train Stop" onChange={handleStopChange} trainData={stops} />
      <p></p>
      <b>Select train line and stop</b>
      <p>{isAccessible}</p>

      {/* sent down the id as prop into arrival */}
      {selectedStopId !== undefined && <ArrivalList parentId={selectedStopId} />}
    </div>
  );
};

export default StopList;
