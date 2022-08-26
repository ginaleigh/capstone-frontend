import React from "react";
import axios from "axios";

export default class ArrivalList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    arrival_time: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/arrival_times?parent_id=${this.props.parentId}`).then((res) => {
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
}
