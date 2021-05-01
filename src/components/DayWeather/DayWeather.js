import './DayWeather.css';
import { ReactComponent as ReactLogo } from './cloud.svg';
import { ReactComponent as Termometer } from './termometer.svg';
import { ReactComponent as Sun } from './sun2.svg';

const DayWeather = (props) => {
  let date = new Date(props.weekDay * 1000);
  let show = `${date.toLocaleString('default', {
    weekday: 'long',
  })}`;

  return (
    <div className="col-5 day-container">
      <div className="day">
        <h6 className="day-title">{show}</h6>

        <p>
          {props.status === 'Clouds' ? <ReactLogo /> : <Sun />}
          {props.tp} ° C
        </p>
      </div>
    </div>
  );
};

export default DayWeather;
