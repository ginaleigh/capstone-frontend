import { useEffect, useState } from "react";
import axios from "axios";

// object destructuring
const ArrivalList = ({ parentId }) => {
  const [arrivalTimes, setArrivalTimes] = useState([]);

  // dependency array
  useEffect(() => {
    axios.get(`http://localhost:3000/arrival_times?parent_id=${parentId}`).then((res) => {
      const payload = res.data["ctatt"]["eta"];
      setArrivalTimes(payload)
      console.log(payload, '<<<<<<<<<<<');
    });
  }, [parentId])

    return (
      <div>
        {arrivalTimes.map((arrivals, index) => (
          <div key={index}>
            <p>
              {arrivals.arrT}
              {arrivals.destNm}
              {arrivals.rt}
              {arrivals.staNm}
            </p>
          </div>
        ))}
      </div>
    );

}

export default ArrivalList
