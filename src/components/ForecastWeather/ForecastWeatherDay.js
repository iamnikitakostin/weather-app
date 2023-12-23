import React from 'react'

function ForecastWeatherDay(props) {
    let dayOfWeekTitle;
    if(props.data.date === props.today) {
        dayOfWeekTitle = "Today";
    } else {
        const dateFormatted = new Date(props.data.date);
        const dayOfWeekNumber = dateFormatted.getUTCDay();
        dayOfWeekTitle = props.weekDays[dayOfWeekNumber];
    }
    const isTemperatureCelcius = props.isCelcius;
    const temperatureLow = isTemperatureCelcius ? props.data.day.mintemp_c : props.data.day.mintemp_f;
    const temperatureHigh = isTemperatureCelcius ? props.data.day.maxtemp_c : props.data.day.maxtemp_f;
    const ultravioletIndex = props.data.day.uv;
    const conditionPath = ((props.data.day.condition.icon).substring(2)).replace("cdn.weatherapi.com", ".")

    return (
        <div className="grouping__day">
            <div className="day__details">
                <p className="details__name p__georgia">
                    {dayOfWeekTitle}
                </p>
                <div className="details__condition">
                    <p
                    className="details__condition-uv p__georgia"
                    style={ultravioletIndex > 7 ? {color:"red"} : {color:"yellow"}}
                    >
                        {ultravioletIndex > 0 ? (ultravioletIndex + "UV") : ""}
                    </p>
                    <div className="details__condition-image">
                        <img src={conditionPath} alt="weather condition"/>
                    </div>
                </div>

            </div>
            <div className="day__temperature">
                <p className="p__georgia">{temperatureLow}°</p>
                <div className="divider__vertical"/>
                <p className="p__georgia">{temperatureHigh}°</p>
            </div>
        </div>
    )
}

export default ForecastWeatherDay