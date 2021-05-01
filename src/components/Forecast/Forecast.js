import Temperature from '../Temperature/Temperature';
import ForecastCard from '../ForecastCard/ForecastCard';

const Forecast = ({ weather, location }) => {
  let currentForecast = weather.current;
  let dailyForecast = weather.daily;

  return (
    <>
      <Temperature forecast={currentForecast} location={location} />

      <div className="forecast-container">
        <div className="forecast">
          <div className="forecast-card">
            {dailyForecast.map((day, i) => (
              <ForecastCard
                key={i}
                min={day.temp.max}
                max={day.temp.min}
                weather={day.weather[0].main}
                dt={day.dt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;
