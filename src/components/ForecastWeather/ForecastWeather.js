import ForecastWeatherDay from './ForecastWeatherDay';

import "./ForecastWeather.css"

function ForecastWeather(props) {
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const weather = props.weather;
  const forecastDays = weather.data.forecast.forecastday;
  const isCelcius = weather.isCelcius;
  const today = (weather.data.location.localtime).slice(0,10);
  const forecastAverage = weather.forecastAverage;
  return (
    <div className="weather__forecast">
      <h1 className="p__arial">
        3-DAY FORECAST
      </h1>
      <div className="horizontal__divider"/>
      <div className="forecast__days">
        {forecastDays.map((day) =>
        (
          <ForecastWeatherDay
          key={day.date}
          data={day}
          weekDays={weekDays}
          today={today}
          isCelcius={isCelcius}
          forecastAverage={forecastAverage}
          />
        )
        )}
      </div>
    </div>
  )

}

export default ForecastWeather