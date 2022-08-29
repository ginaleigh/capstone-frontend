import "./App.css";
import "./components/Layout.css";
//import "./components/Stops.css";
import "./components/Arrivals.css";
import Stops from "./components/Stops";
// import Arrivals from "./components/Arrivals";

function App() {
  return (
    <div className="App">
      <Stops />
      {/* <Arrivals /> */}
    </div>
  );
}

export default App;
