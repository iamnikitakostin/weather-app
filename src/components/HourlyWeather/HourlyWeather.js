import HourlyWeatherHour from "./HourlyWeatherHour";

import "./HourlyWeather.css"

function HourlyWeather(props) {

  const weather = props.weather;
  const currentHours = parseInt(weather.data.location.localtime_epoch);
  const isCelcius = weather.isCelcius;
  const isTwelveHours = weather.isTwelveHours;
  const displayedHours = [];
  const forecastDays = weather.data.forecast.forecastday;
  let i = 0, day = 0;
  while (displayedHours.length !== 24){
    const proposedHours = forecastDays[day].hour[i];
    const secondsBetweenHours = proposedHours.time_epoch - currentHours;
    if((secondsBetweenHours > 1) || secondsBetweenHours > -3600)
    {
      displayedHours.push(proposedHours);
    }
    i++;
    if (i > 23){
      day++;
      i = 0;
    }
  }

  return (
    <div className="weather__hourly">
      <p className="p__georgia">
        Today, {forecastDays[0].day.condition.text} with an average of {forecastDays[0].day.avghumidity}% humidity.
      </p>
      <div className="horizontal__divider"></div>
      <div className="hourly__timeline">
        {displayedHours.map((element) => (
          <HourlyWeatherHour data={element} key={element.time} isCelcius={isCelcius} isTwelveHours={isTwelveHours} />
        ))}
      </div>
    </div>
  )

}

export default HourlyWeather