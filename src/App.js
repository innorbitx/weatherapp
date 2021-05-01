import React from 'react';

import WeatherChart from './components/WeatherChart/WeatherChart';
import WeatherFetch from './components/WeatherFetch/WeatherFetch';
function App() {
  return (
    <div className="App">
      {/* <Weather /> */}
      {/* <WeatherChart /> */}
      <WeatherFetch />
    </div>
  );
}

export default App;
