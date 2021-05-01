import './Temperature.css';

const Temperature = ({ forecast, location }) => {
  let city = location.city;
  let state = location.region_name;
  let temperature = Math.round(forecast.temp);
  let humidity = forecast.humidity;
  let clouds = forecast.clouds;

  return (
    <div className="temperature-container">
      <h1 className="temperature">{temperature} °C</h1>
      <h6 className="location">
        {city}, {state}
      </h6>

      <p>{humidity}</p>
      <p>{clouds}</p>
    </div>
  );
};

export default Temperature;
