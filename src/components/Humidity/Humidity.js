import React from 'react'
import "./Humidity.css"

function Humidity(props) {
    const weather = props.weather;
    const humidity = weather.data.current.humidity;
    return (
        <div className="weather__humidity">
            <h1 className="p__arial">
                Humidity
            </h1>
            <div className='horizontal__divider' style={{width: `${humidity}%`}}/>
            <div className="humidity__details">
                <div className="details__data">
                    <p className="headtext__arial">
                        {humidity}%
                    </p>
                </div>
            </div>
            <div className="weather__humidity-percentage">
                <div className='percentage__progress' style={{width: `${humidity}%`}}></div>
            </div>
        </div>
    )
}

export default Humidity