import React from 'react'

function ForecastWeatherDay(props) {
    let dayOfWeekTitle;
    if(props.data.date === props.today) {
        dayOfWeekTitle = "Today";
    }
    else 
    {
        const dateFormatted = new Date(props.data.date);
        const dayOfWeekNumber = dateFormatted.getDay();
        dayOfWeekTitle = props.weekDays[dayOfWeekNumber];
    }
    const weatherCondition = props.data.day.condition.text;
    const isTemperatureCelcius = props.isCelcius;
    const temperatureLow = isTemperatureCelcius ? props.data.day.mintemp_c : props.data.day.mintemp_f;
    const temperatureHigh = isTemperatureCelcius ? props.data.day.maxtemp_c : props.data.day.maxtemp_f;

    return (
        <div className="grouping__day">
            <div className="day__details">
                <div className="details__name">{dayOfWeekTitle}</div>
                <div className="details__condition">{weatherCondition}</div>
            </div>
            <div className="day__temperature">
                <div className="temperature__low">{temperatureLow}°</div>
                <div className="temperature__line">---</div>
                <div className="temperature__high">{temperatureHigh}°</div>
            </div>
        </div>
    )
}

export default ForecastWeatherDay