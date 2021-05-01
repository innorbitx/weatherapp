import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Forecast from '../Forecast/Forecast';
// import WeatherChart from '../WeatherChart/WeatherChart';
import './WeatherFetch.css';

const WeatherFetch = () => {
  const [data, setData] = useState();
  const [weatherInfo, setweatherInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getUserLocation = async () => {
    setIsLoading(true);
    await axios
      .get(
        'http://api.ipstack.com/check?access_key=5bc54110014bc25553a9fa67d97d114b'
      )
      .then((response) => {
        setData(response.data);

        getUserWeather(response);
      })
      .then()
      .catch((e) => {
        // Capturamos los errores
        setError(e);
      });
  };

  const getUserWeather = async (response) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.latitude}&lon=${response.data.longitude}&units=metric&lang=es&appid=4538e2161267f28a67ada0678da503f2`
      )
      .then((response) => {
        response.data.daily.shift();
        setweatherInfo(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        // Capturamos los errores
        setError(e);
      });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  if (weatherInfo) {
    console.log(weatherInfo);

    return (
      <div>
        <Forecast weather={weatherInfo} location={data} />
        {/* <WeatherChart /> */}
      </div>
    );
  }

  if (error) {
    return error;
  }

  return <div>{isLoading ? 'Loading...' : null}</div>;
};

export default WeatherFetch;
