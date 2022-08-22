import React from "react";
import axios from "axios";
import Arrivals from "./Arrivals";

export default class StopList extends React.Component {
  state = {
    stops: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/stops`).then((res) => {
      const stops = res.data;
      this.setState({ stops });
    });
  }

  render() {
    return (
      <div>
        {this.state.stops.map((stop, index) => (
          <div key={index}>
            <b>{stop.name}</b>
            <br></br>
            {stop.parent_id}
            <br></br>
            {stop.is_accessible}
            {stop.towards_loop}
            <Arrivals parentId={stop.parent_id} />
          </div>
        ))}
      </div>
    );
  }
}

  //   render() {
  //     return (
  //       <div>
  //         <select>
  //           {this.state.stops.map((stop, index) => (
  //             <option value={stop.parent_id}>{stop.name}</option>
  //           ))}
  //         </select>
  //       </div>
  //     );
  //   }
  // }

//   render() {
//     return (
//       <div>
//         <Dropdown
//           label="CTA Train Line"
//           options={[
//             { label: "Blue" },
//             { label: "Brown" },
//             { label: "Red" },
//             { label: "Green" },
//             { label: "Orange" },
//             { label: "Purple" },
//             { label: "Pink" },
//             { label: "Yellow" },
//           ]}
//           value={line}
//           onChange={pickTrainLine}
//         />
//         <Dropdown 
//         label="Train Stop"
//         options={this.state.stops.map((stop, index) => <option value={stop.parent_id}>{stop.name}</option>)} />
//       </div>
//     );
//   }
// }