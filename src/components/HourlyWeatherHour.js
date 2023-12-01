import React from 'react'

function HourlyWeatherHour(props) {
    const weather = props.data;
    const forecastHours = new Date((weather.data.forecast.forecastday[0].hour[12].time_epoch)*1000);
    const currentHours = props.currentHours;
    let hours = forecastHours.getHours();
    let dayPeriod;
    if (props.isTwelveHours === true) {
        dayPeriod = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;
    }
    if (hours == currentHours || hours > currentHours){
        return (
            <div className="timeline__period">
                <div className="period__hour">
                Now
                </div>
                <div className="period__condition">
                O
                </div>
                <div className="period__temperature">
                76°
                </div>
            </div>
        )
    }
    

}

export default HourlyWeatherHour