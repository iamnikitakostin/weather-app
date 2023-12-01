function HourlyWeather(props) {
  const weather = props.weather;
  const currentHours = (weather.data.location.localtime).slice(11, 13);
  console.log(currentHours)
  const formatted = new Date(currentHours);
  console.log(formatted)
  return (
    <div className="weather__hourly">
      <div className="hourly__conditions">
        Sunny conditions will continue all day
      </div>
      <div className="hourly__timeline">
        <div className="timeline__period">
          <div className="period__hour">
            Now
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            76°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            10AM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            77°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            11AM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            77°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            12PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            77°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            1PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
        <div className="timeline__period">
          <div className="period__hour">
            2PM
          </div>
          <div className="period__condition">
            O
          </div>
          <div className="period__temperature">
            78°
          </div>
        </div>
      </div>
    </div>
  )

}

export default HourlyWeather