import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <h1 className="box" style={{ color: "grey", marginBottom: "20px" }}>
        My Weather App
      </h1>
      <Weather />
    </div>
  );
}

export default App;
