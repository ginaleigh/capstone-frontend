import { useEffect, useState } from "react";
import axios from "axios";
import Arrival from "./Arrival";

// object destructuring
const ArrivalList = ({ stop }) => {
  const [arrivalTimes, setArrivalTimes] = useState([]);

  // dependency array
  useEffect(() => {
    axios.get(`http://localhost:3000/arrival_times?parent_id=${stop.id}`).then((res) => {
      const payload = res.data["ctatt"]["eta"];
      setArrivalTimes(payload)
      console.log(payload);
    });
  }, [stop.id])

    return (
      <div>
        {arrivalTimes.map((arrival, index) => (
          <Arrival arrival={arrival} key={ index } stop={stop} />          
        ))}
      </div>
    );

}

export default ArrivalList
