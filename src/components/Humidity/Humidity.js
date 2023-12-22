import React from 'react'
import "./Humidity.css"

function Humidity(props) {
    const weather = props.weather;
    const humidity = weather.data.current.humidity;
    const iconAirQuality = "./weather/64x64/air_quality/" + ".png";
    console.log (weather)
  return (
    <div className="weather__humidity">
        <div className="humidity__details">
            <div className="humidity__title">
                Humidity
            </div>
            <div className="details__data">
                <div className="data__score">
                    {humidity}%
                </div>
                <div className="data__description">
                    {weather.data.forecast.forecastday[0].hour[parseInt(weather.data.location.localtime.slice(11,13)) + 1].condition.text}
                </div>
            </div>
        </div>
        <div className="weather__humidity-percentage">
            <div className='percentage__progress' style={{width: `${humidity}%`}}></div>
        </div>
    </div>
  )
}

export default Humidity