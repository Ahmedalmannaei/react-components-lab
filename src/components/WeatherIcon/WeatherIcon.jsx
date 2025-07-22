const WeatherIcon = ({ forecast }) => {
  return (
    <img
      src={forecast.img}
      alt={forecast.alt}
      style={{ width: "50px", height: "50px" }}
    />
  );
};

export default WeatherIcon;
