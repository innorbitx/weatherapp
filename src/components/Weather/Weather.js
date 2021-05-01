import React, { useEffect, useState } from 'react';

import './Weather.css';
import axios from 'axios';
import DateTime from '../DateTime/DateTime';
import DayWeather from '../DayWeather/DayWeather';
import WeatherChart from '../WeatherChart/WeatherChart';

const Weather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [day, setDay] = useState(null);

  let getLocation = async () => {
    await axios
      .get(
        'http://api.ipstack.com/check?access_key=5bc54110014bc25553a9fa67d97d114b'
      )
      .then((response) => {
        // Obtenemos los datos
        if (!isLoading) {
          console.log(response.data);
          let city = response.data.city;
          setCity(city);
          let location = response.data.region_name;
          setLocation(location);
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.latitude}&lon=${response.data.longitude}&units=metric&lang=es&appid=4538e2161267f28a67ada0678da503f2`
            )
            .then((response) => {
              // Obtenemos los datos
              if (!isLoading) {
                console.log(response.data);
                setIsLoading(true);
                setTemp(response.data.current.temp);
                let sec = response.data.current.sunrise;
                let sunrise = new Date(sec * 1000);
                let sunriseString = sunrise.toLocaleTimeString();
                setSunrise(sunriseString);

                // Exclude current day
                response.data.daily.shift();
                setDay(response.data.daily);
              }
            })
            .catch((e) => {
              // Capturamos los errores
            });
        }
      })
      .catch((e) => {
        // Capturamos los errores
      });
  };

  useEffect(() => {
    if (!isLoading) {
      let color = '#000';
      let date = new Date();
      let hour = date.getHours();
      let minutes = String(date.getMinutes()).padStart(2, '0');
      console.log(`Son las ${hour} con ${minutes} minutos`);
    }
    getLocation();

    //getWeather(getLocation());
  }, [setTime, isLoading]);

  return (
    <div className="weather-container">
      <div className="container">
        <div className="weather-temperature">
          <p>{Math.round(temp)} ° C</p>
          <h6>
            {city}, {location}
          </h6>
        </div>

        <p>Location : {location}</p>
        <DateTime />
        <p className="text-white">Sunrise time: {sunrise}</p>

        <div className="week-container">
          <div className="row week">
            {day
              ? day.map((el, i) => (
                  <DayWeather
                    key={i}
                    weekDay={el.dt}
                    tp={el.temp.day}
                    status={el.weather[0].main}
                  />
                ))
              : 'wrong'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
