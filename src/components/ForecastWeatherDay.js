import React from 'react'

function ForecastWeatherDay(props) {
    let dayOfWeekTitle;
    if(props.data.date === props.today) {
        dayOfWeekTitle = "Today";
    }
    else 
    {
        const dateFormatted = new Date(props.data.date);
        const dayOfWeekNumber = dateFormatted.getUTCDay();
        dayOfWeekTitle = props.weekDays[dayOfWeekNumber];
    }
    const isTemperatureCelcius = props.isCelcius;
    const temperatureLow = isTemperatureCelcius ? props.data.day.mintemp_c : props.data.day.mintemp_f;
    const temperatureHigh = isTemperatureCelcius ? props.data.day.maxtemp_c : props.data.day.maxtemp_f;
    const ultravioletIndex = props.data.day.uv;
    const conditionPath = ((props.data.day.condition.icon).substring(2)).replace("cdn.weatherapi.com", "")

    return (
        <div className="grouping__day">
            <div className="day__details">
                <div className="details__name">
                    {dayOfWeekTitle}
                </div>
                <div className="details__condition">
                    <img src={conditionPath} alt="weather condition"/> 
                </div>
                <div 
                className="details__uv" 
                style={ultravioletIndex > 7 ? {color:"red"} : {color:"yellow"}}
                >
                    {ultravioletIndex > 3 ? (ultravioletIndex + "UV") : ""}
                </div>
            </div>
            <div className="day__temperature">
                <div className="temperature__low">{temperatureLow}°</div>
                <div className="temperature__high">{temperatureHigh}°</div>
            </div>
        </div>
    )
}

export default ForecastWeatherDay