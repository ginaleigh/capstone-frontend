import "./app.css";
import "./arrivals.css";
import Stops from "./Stops";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <img src="/reachAbleLogo.png" />
      <Nav />
      <Stops />
      <img src="/looptrain.jpg" />
    </div>
  );
}

export default App;
