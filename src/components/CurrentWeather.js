function CurrentWeather(props) {
    const weather = props.weather;
    return (
        <div className="weather__today">
            <div className="today__location">
                {weather.data.location.name}
            </div>
            <div className="today__temperature">
                {weather.data.current.temp_c}°
            </div>
            <div className="today__condition">
                {weather.data.current.condition.text}
            </div>
            <div className="today__range">
                <div className="range__high">
                    H:{weather.data.forecast.forecastday[0].day.maxtemp_c}°
                </div>
                <div className="range__low">
                    L:{weather.data.forecast.forecastday[0].day.mintemp_c}°
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather