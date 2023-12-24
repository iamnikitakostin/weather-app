import "./CurrentWeather.css"

function CurrentWeather(props) {
    const weather = props.weather;
    const isTemperatureCelcius = weather.isCelcius;
    const temperatureLow = isTemperatureCelcius ? weather.data.forecast.forecastday[0].day.mintemp_c : weather.data.forecast.forecastday[0].day.mintemp_f;
    const temperatureHigh = isTemperatureCelcius ? weather.data.forecast.forecastday[0].day.maxtemp_c : weather.data.forecast.forecastday[0].day.maxtemp_f;
    const temperatureCurrent = isTemperatureCelcius ? weather.data.current.temp_c : weather.data.current.temp_f;
    return (
        <div className="weather__today">
            <h1 className="headtext__arial">{weather.data.location.name}</h1>
            <p className="headtext__arial">
                {temperatureCurrent}°
            </p>
            <p className="p__georgia">
                {weather.data.current.condition.text}
            </p>
            <div className="today__range">
                <p className="p__georgia">
                    H:{temperatureHigh.toFixed(1)}°
                </p>
                <p className="p__georgia">
                    L:{temperatureLow.toFixed(1)}°
                </p>
            </div>
        </div>
    )
}

export default CurrentWeather