import ForecastWeatherDay from './ForecastWeatherDay';

function ForecastWeather(props) {
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const weather = props.weather;
  const forecastDays = weather.data.forecast.forecastday;
  const isCelcius = weather.isCelcius;
  const today = (weather.data.location.localtime).slice(0,10);
  return (
    <div className="weather__forecast">
      <div className="forecast__title">
        10-DAY FORECAST
      </div>
      <div className="horizontal__divider"></div>
      <div className="forecast__days">
        {forecastDays.map((day) =>
        (
          <ForecastWeatherDay 
          key={day.date} 
          data={day} 
          weekDays={weekDays} 
          today={today}
          isCelcius={isCelcius}
          />
          
        )
        )}
      </div>
    </div>
  )

}

export default ForecastWeather