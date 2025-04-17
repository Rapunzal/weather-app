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
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
    );
    console.log(response.data.main);
    setData(response.data.main);
  };
  //Use option+shift+8 for degree symbol
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Today Temp: {data.temp} °F</h1>
      <form>
        <input type="text" placeholder="Enter City" />
        <button onClick={handleClick}>Get Weather</button>
      </form>
    </div>
  );
};

export default Weather;
