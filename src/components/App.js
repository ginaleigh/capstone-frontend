import "./app.css";
import "./arrivals.css";
import Stops from "./Stops";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <img src="/blueline.png" />
      <Nav />
      <Stops />
      
    </div>
  );
}

export default App;
