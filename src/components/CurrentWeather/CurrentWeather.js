import "./CurrentWeather.css"

function CurrentWeather(props) {
    const weather = props.weather;
    const isTemperatureCelcius = weather.isCelcius;
    const temperatureLow = isTemperatureCelcius ? weather.data.forecast.forecastday[0].day.mintemp_c : weather.data.forecast.forecastday[0].day.mintemp_f;
    const temperatureHigh = isTemperatureCelcius ? weather.data.forecast.forecastday[0].day.maxtemp_c : weather.data.forecast.forecastday[0].day.maxtemp_f;
    const temperatureCurrent = isTemperatureCelcius ? weather.data.current.temp_c : weather.data.current.temp_f;
    return (
        <div className="weather__today">
            <div className="today__location">
                {weather.data.location.name}
            </div>
            <div className="today__temperature">
                {temperatureCurrent}°
            </div>
            <div className="today__condition">
                {weather.data.current.condition.text}
            </div>
            <div className="today__range">
                <div className="range__high">
                    H:{temperatureHigh}°
                </div>
                <div className="range__low">
                    L:{temperatureLow}°
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather