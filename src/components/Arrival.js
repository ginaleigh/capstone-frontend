import React from 'react'
import dayjs from 'dayjs';

const Arrival = ({arrival}) => {


  return (
          <p>
          <b>Arrival time: </b> {dayjs(arrival.arrT).format(' HH:mm:ss a MM/DD/YYYY')}
          {/* <br/><b>Departure Time: </b>{dayjs(arrival.prdt).format(' HH:mm:ss a MM/DD/YYYY')} */}
          <br/><b>{arrival.staNm} towards {arrival.destNm}</b>
              </p>
            
              
  )
}

export default Arrival