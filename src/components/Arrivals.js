import React from "react";
import axios from "axios";

export default class ArrivalList extends React.Component {
  constructor(props) {
    super()
    this.props = props;
  }
  state = {
    arrival_time: [],
  };

  componentDidMount() {
    console.log("hi", this.props)
    axios.get(`http://localhost:3000/arrival_times?parent_id=${this.props.parentId}`).then((res) => {
      const arrival_time = res.data["ctatt"]["eta"];
      this.setState({ arrival_time });
      console.log(arrival_time);
    });
  }

  render() {
    return (
      <div>
        {this.state.arrival_time.map((arrivals) => (
          <div key={arrivals.rn}>
            <b>{arrivals.arrT}</b>
            <b>{arrivals.destNm}</b>
            <b>{arrivals.rt}</b>
            <b>{arrivals.staNm}</b>
          </div>
        ))}
      </div>
    );
  }
}
