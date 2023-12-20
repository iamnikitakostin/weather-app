import React from 'react'

function AirQuality(props) {
    const weather = props.weather;
    const airQuality = weather.data.current.air_quality["us-epa-index"];
    const iconAirQuality = "./weather/64x64/air_quality/" + airQuality + ".png";
    let statementAirQuality;
    switch(airQuality) {
        case 1:
            statementAirQuality = "No Health Risks";
            break;
        case 2:
            statementAirQuality = "Moderate Health Risks";
            break;
        case 3:
            statementAirQuality = "Health Risks for Sensitive Groups";
            break;
        case 4:
            statementAirQuality = "Health Risks";
            break;
        case 5:
            statementAirQuality = "Very Unhealthy";
            break;
        case 6:
            statementAirQuality = "Hazardous";
            break;
        default:
            statementAirQuality = "Error. Please, check your Internet connection.";
            break;
    }
  return (
    <div className="weather__airquality">
        <div className="airquality__title">
            AirQuality
        </div>
        <div className="airquality__details">
            <div className="details__data">
                <div className="data__score">
                    {airQuality} - {statementAirQuality}
                </div>
                <div className="data__description">
                </div>
            </div>
            <div className="details__icon">
                <img src={iconAirQuality} alt='air quality'/>
            </div>

        </div>


    </div>
  )
}

export default AirQuality