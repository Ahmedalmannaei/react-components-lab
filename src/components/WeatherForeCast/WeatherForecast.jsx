import WeatherData from "../WeatherData/WeatherData";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <WeatherIcon forecast={forecast} />
      <WeatherData forecast={forecast} />
    </div>
  );
};

export default WeatherForecast;
