import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "f71625fdd5188655fa6d43214c2d6af3";
const Weather = () => {
  const [city, setCity] = useState("Denver");
  const [data, setData] = useState({});
  useEffect(() => {
    getWeatherData();
  }, []);
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );
      console.log(response.data);
      setData(response.data.main);
    } catch (err) {
      console.log(err, " error");
      setCity("Not Found");
    }
  };
  //Use option+shift+8 for degree symbol
  function handleClick(e) {
    e.preventDefault();
    getWeatherData();
  }
  return (
    <div className="container">
      <div className="temp-container">
        <div
          style={{
            marginLeft: "20px",
            marginTop: "50px",
            marginBottom: "80px",
          }}
        >
          <form>
            <input
              type="text"
              name={city}
              placeholder="Enter City"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn" onClick={handleClick}>
              Get Weather
            </button>
          </form>
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            Today Temp: {data.temp} °F
          </h1>
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>{city}</h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
