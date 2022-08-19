import React from "react";
import axios from "axios";

export default class ArrivalList extends React.Component {
  constructor(prop) {
    super();
    this.prop = prop;
  }
  state = {
    arrival_time: [],
  };

  componentDidMount() {
    console.log("hi", this.prop);
    axios.get(`http://localhost:3000/arrival_times?parent_id=${this.prop.parentId}`).then((res) => {
      const arrival_time = res.data["ctatt"]["eta"];
      this.setState({ arrival_time });
      console.log(arrival_time);
    });
  }

  render() {
    return (
      <div>
        {this.state.arrival_time.map((arrivals, index) => (
          <div key={index}>
            <b>{arrivals.arrT}</b>
            <p>Arrivals.js</p>
            <b>{arrivals.destNm}</b>
            <b>{arrivals.rt}</b>
            <b>{arrivals.staNm}</b>
          </div>
        ))}
      </div>
    );
  }
}
