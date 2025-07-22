import React from "react";

const WeatherData = (forecast) => {
  return (
    <div>
      <p>
        <span>conditions: {forecast.conditions}</span>current weather conditions
      </p>
      <p>
        <span>time: {forecast.time}</span>time of day
      </p>
    </div>
  );
};

export default WeatherData;
