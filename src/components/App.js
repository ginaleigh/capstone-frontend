import "./app.css";
import Stops from "./Stops";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <img src="/reachAbleLogo.png" alt="This is the reachable logo" />
      <Nav />
      <Stops />
      <img src="/loopResize.jpg" alt="This is a black and white pic of a train in Chicago" />
      <br></br>
      <br></br>
      <p>This site was aestetically designed to ensure compliance and optimal accessibility for visually impaired individuals. <br></br> Brought to you by Gina Mirando</p>
    </div>
  );
}

export default App;
