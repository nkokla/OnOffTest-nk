import "./App.css";

import DayCalls from "components/DayCalls";

import { callLogs } from "./data-set.json";

function App() {
  return (
    <div className="App">
      <DayCalls data={callLogs} />
    </div>
  );
}

export default App;
