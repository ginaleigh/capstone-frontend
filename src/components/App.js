import "./app.css";
import Stops from "./Stops";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <img src="/reachAbleLogo.png" />
      <Nav />
      <Stops />
      <img src="/loopResize.jpg" />
      <br></br>
      <br></br>
      <p>Reachable, transit for all brought to you by Gina Mirando</p>
    </div>
  );
}

export default App;
