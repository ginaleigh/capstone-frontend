import { useEffect, useState } from "react";
import axios from "axios";
import ArrivalList from "./Arrivals";
import "./stops.css";

// class components
// functional components -- hooks

// Fully controlled components - supply both the value and the change function
const Dropdown = ({ informationBeforeDropdown, trainData, onChange, value }) => {
  return (
    <label>
      {informationBeforeDropdown}
      <select onChange={onChange} value={value}>
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
  const [stop, setStop] = useState(null);
  const [line, setLine] = useState(null);

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
    const lineId = parseInt(event.target.value);
    const newLine = lines.find((item) => item.id === lineId);
    setLine(newLine);
  };

  const handleStopChange = (event) => {
    const stopId = parseInt(event.target.value);
    for (let i = 0; i < stops.length; i++) {
      if (stops[i].id === stopId) {
        setStop(stops[i]);
      }
    }
  };

  return (
    <div className="drop">
      <Dropdown
        informationBeforeDropdown="CTA Train Line"
        onChange={handleChange}
        trainData={lines}
        value={line ? line.id : ""}
      />
      <Dropdown
        informationBeforeDropdown="Train Stop"
        onChange={handleStopChange}
        trainData={stops}
        value={stop ? stop.id : ""}
      />
      <p></p>
      <b>Please select a train line and stop</b>
      <b>{stop && <p>This stop is {stop.is_accessible ? "accessible" : "not accessible"}</p>}</b>
      {/* sent down the id as prop into arrival */}
      {stop && <ArrivalList stop={stop} />}
    </div>
  );
};

//export { AnothComp, AnotherComp1 } ** only one default but multiple ways to export similar to import I used above in import **
export default StopList;
