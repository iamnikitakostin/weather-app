import React from 'react'

function HourlyWeatherHour(props) {
    const weather = props.data;
    const forecastHours = (new Date((weather.time_epoch)*1000)).getHours();
    const isTemperatureCelcius = props.isCelcius;
    const isTwelveHours = props.isTwelveHours
    const conditionPath = ((weather.condition.icon).substring(2)).replace("cdn.weatherapi.com", "")
    let dayPeriod = forecastHours >= 12 ? "PM" : "AM";
    const temperature = isTemperatureCelcius ? weather.temp_c : weather.temp_f;
    let hours = forecastHours;
    const ultravioletIndex = weather.uv;


    if (isTwelveHours === true) {
        hours = (forecastHours % 12) || 12;
    }
        return (
            <div className="timeline__period">
                <div className="period__hour">
                    {hours}{isTwelveHours ? dayPeriod : ":00"}
                </div>
                <div className="period__condition">
                    <img src={conditionPath} alt="weather condition"/>
                </div>
                <div className="period__temperature">
                    {temperature}°
                </div>
                <div 
                className="period__uvDanger"
                style={ultravioletIndex > 7 ? {color:"red"} : {color:"yellow"}}
                >
                    {ultravioletIndex > 3 ? (ultravioletIndex + "UV") : ""}
                </div>
            </div>
        )
    

}

export default HourlyWeatherHour