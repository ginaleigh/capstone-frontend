import React from "react";
import dayjs from "dayjs";

const Arrival = ({ arrival, stop }) => {
  return (
    <p>
      <b>
        {arrival.staNm} towards {arrival.destNm}{" "}
      </b>
      <br></br>Arrival time {dayjs(arrival.arrT).format(" HH:mm:ss a")}
      <br></br>
      { /* ternary operator */}
      {stop && <p>Accessible: {stop.is_accessible ? 'YES' : 'NO'}</p>}
    </p>
  );
};

export default Arrival;
