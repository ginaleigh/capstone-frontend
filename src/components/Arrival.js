import React from 'react'
import dayjs from 'dayjs';

const Arrival = ({arrival}) => {


  return (
            <p>
              <div>Arrival time: {dayjs(arrival.arrT).format(' HH:mm:ss a MM/DD/YYYY')} Departure Time: {dayjs(arrival.prdt).format(' HH:mm:ss a MM/DD/YYYY')}</div><br></br>
              <div><b>{arrival.staNm} Towards {arrival.destNm}</b></div>
              
            </p>
  )
}

export default Arrival