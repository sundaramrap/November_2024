import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  return (
    <div className="stopwatch">
      <h1> StopWatch</h1>
      <div className="display-time">TIME :{time}</div>
      <div className="controlls">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
