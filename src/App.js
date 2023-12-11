import React from 'react';
import './App.css';

const useFruitesStatus = () => {
  const [status, setStatus] = React.useState("Available");

  setInterval(() => {
    setStatus(status === "Available" ? "Not Available" : "Available")
  }, 3000);

  return status;
}

function App() {

  const status = useFruitesStatus();

  const [appleCount, setAppleCount] = React.useState(0);
  const [mangoCount, setMangoCount] = React.useState(0);
  const [orangeCount, setOrangeCount] = React.useState(0);


  const [lastUpdated, setLastUpdated] = React.useState("");

  const updateLastFruites = (fruite) => {
    setLastUpdated(fruite)
  }

  React.useEffect(()=>{
    document.title = "I will call always";
    console.log("I am called because of re-render")
  })

  React.useEffect(() => {
    setLastUpdated("None")
    console.log("I am called once")
  }, []);

  React.useEffect(() => updateLastFruites("Apple"), [appleCount]);
  React.useEffect(() => updateLastFruites("Orange"), [orangeCount]);
  React.useEffect(() => updateLastFruites("Mango"), [mangoCount]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{status}</h3>
        <p>
          {"Apple Count:" + appleCount}
          <button onClick={(e) => setAppleCount(appleCount + 1)}>+</button>
          <button onClick={(e) => setAppleCount(appleCount - 1)}>-</button>
        </p>
        <p>
          {"Mango Count:" + mangoCount}
          <button onClick={(e) => setMangoCount(mangoCount + 1)}>+</button>
          <button onClick={(e) => setMangoCount(mangoCount - 1)}>-</button>
        </p>
        <p>
          {"Orange Count:" + orangeCount}
          <button onClick={(e) => setOrangeCount(orangeCount + 1)}>+</button>
          <button onClick={(e) => setOrangeCount(orangeCount + 1)}>-</button>
        </p>

        <h1>Total Fruites Count: {appleCount + mangoCount + orangeCount}</h1>
        <h1>Last Updated: {lastUpdated}</h1>
      </header>
    </div>
  );
}

export default App;
