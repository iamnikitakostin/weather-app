import React from 'react'

function HourlyWeatherHour(props) {
    const weather = props.data;
    const forecastHours = parseInt(weather.time.slice(11,13));
    const isTemperatureCelcius = props.isCelcius;
    const isTwelveHours = props.isTwelveHours
    const conditionPath = ((weather.condition.icon).substring(2)).replace("cdn.weatherapi.com", ".")
    let dayPeriod = forecastHours >= 12 ? "PM" : "AM";
    const temperature = isTemperatureCelcius ? weather.temp_c : weather.temp_f;
    let hours = forecastHours;
    const ultravioletIndex = weather.uv;

    if (isTwelveHours === true) {
        hours = (forecastHours % 12) || 12;
    }
        return (
            <div className="timeline__period">
                <p className="period__hour p__arial">
                    {hours}{isTwelveHours ? dayPeriod : ":00"}
                </p>
                <div className="period__condition">
                    <img src={conditionPath} alt="weather condition"/>
                </div>
                <div
                className="period__uvDanger p__arial"
                style={ultravioletIndex > 7 ? {color:"red"} : {color:"yellow"}}
                >
                    {ultravioletIndex > 2 ? (ultravioletIndex + "UV") : ""}
                </div>
                <div className="period__temperature p__georgia">
                    {temperature.toFixed(1)}°
                </div>

            </div>
        )


}

export default HourlyWeatherHour