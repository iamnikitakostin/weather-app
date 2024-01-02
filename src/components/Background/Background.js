import React from 'react'
import "./Background.css"

function Background(props) {
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const weather = props.weather
  const isLoading = props.isLoading;
  const backgroundImage = props.backgroundImage;

  React.useEffect(() => {
    const isDay = props.isDay;
    const dayLength = isDay ?
      [weather.data.forecast.forecastday[0].astro.sunrise, weather.data.forecast.forecastday[0].astro.sunset]
    :
      [weather.data.forecast.forecastday[0].astro.sunset, weather.data.forecast.forecastday[0].astro.sunrise];
    const startTime = (dayLength[0].slice(0,2) === "12" ? (dayLength[0].slice(6) === "AM" ? "00" + dayLength[0].slice(2,5) : "12" + dayLength[0].slice(2,5)) : (dayLength[0].slice(6) === "AM") ? dayLength[0].slice(0,5) : (parseInt(dayLength[0].slice(0,2)) + 12) + dayLength[0].slice(2,5)).split(':');
    const endTime = (dayLength[1].slice(0,2) === "12" ? (dayLength[1].slice(6) === "AM" ? "00" + dayLength[1].slice(2,5) : "12" + dayLength[1].slice(2,5)) : (dayLength[1].slice(6) === "AM") ? dayLength[1].slice(0,5) : (parseInt(dayLength[1].slice(0,2)) + 12) + dayLength[1].slice(2,5)).split(':');
    const startTimeFormatted = new Date();
    const endTimeFormatted = new Date();
    if (isDay === false) {endTimeFormatted.setDate(startTimeFormatted.getDate() + 1)}
    const currentTimeFormatted = new Date(weather.data.location.localtime);
    startTimeFormatted.setHours(startTime[0], startTime[1], 0, 0);
    endTimeFormatted.setHours(endTime[0], endTime[1], 0, 0);
    const newPosition = ((currentTimeFormatted.getTime() - startTimeFormatted.getTime()) / (endTimeFormatted.getTime() - startTimeFormatted.getTime()))/2*100;
    setCurrentPosition(newPosition);
  }, [props.weather])

    return (
      <>
      {isLoading ?
      (<></>)
      :
      (<div className="app__background" style={{left:`${50 -currentPosition}%`}}>
      <img src={`./weather/background/${backgroundImage}.svg`}/>
      </div>)
    }
  </>
  )
}

export default Background

