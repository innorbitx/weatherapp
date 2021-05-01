import './ForecastCard.css';

import { ReactComponent as ColdIcon } from './cold-icon.svg';
import { ReactComponent as HotIcon } from './hot-icon.svg';
import { ReactComponent as Sun } from './weather-sun.svg';
import { ReactComponent as Clouds } from './weather-clouds.svg';
import { ReactComponent as Rain } from './weather-rain.svg';

const ForecastCard = ({ min, max, weather, dt }) => {
  function displayWeatherIcon(weather) {
    switch (weather) {
      case 'Clear':
        return <Sun />;
      case 'Clouds':
        return <Clouds />;
      case 'Rain':
        return <Rain />;
      default:
        return <Sun />;
    }
  }

  function convertDateTime(dt) {
    let date = new Date(dt * 1000);
    let show = `${date.toLocaleString('default', {
      weekday: 'long',
    })}`;

    return show;
  }

  return (
    <div className="daily-forecast-container">
      <div className="daily-forecast">
        {/* <Sun />
        <Clouds /> */}

        <h5 className="day">{convertDateTime(dt)}</h5>

        {displayWeatherIcon(weather)}
        {/* {weather} */}

        <div className="forecast-content">
          <HotIcon />
          <p>{min}° C</p>
        </div>
        <div className="forecast-content">
          <ColdIcon />
          <p>{max}° C</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
