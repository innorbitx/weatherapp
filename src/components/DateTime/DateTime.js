import React, { useState, useEffect } from 'react';

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="text-white">
      <p>
        Time :{' '}
        {date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <p> Date : {date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTime;
