import React from "react";
import dayjs from "dayjs";

const Arrival = ({ arrival }) => {
  return (
    <p>
      <b>
        {arrival.staNm} towards {arrival.destNm}{" "}
      </b>
      <br></br>Arrival time {dayjs(arrival.arrT).format(" HH:mm:ss a")}
    </p>
  );
};

export default Arrival;
