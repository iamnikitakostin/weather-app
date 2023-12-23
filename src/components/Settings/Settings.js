import React from 'react'
import HoursSwitch from "react-switch";
import TemperatureSwitch from "react-switch";
import "./Settings.css"

function Settings(props) {
    const isCelcius = props.isCelcius;
    const isTwelveHours = props.isTwelveHours;
    const setIsCelcius = props.setIsCelcius;
    const setIsTwelveHours = props.setIsTwelveHours;

    const hoursOnChange = () => {
        const initial = isTwelveHours;
        setIsTwelveHours(!initial);
    }

    const temperatureOnChange = () => {
        const initial = isCelcius;
        setIsCelcius(!initial);
    }

    return (
        <div className="weather__settings">
            <div className="settings__hours">
                <label className="p__arial" htmlFor="switch-hours">24H</label>
                <HoursSwitch
                checked={isTwelveHours}
                onChange={hoursOnChange}
                uncheckedIcon={false}
                checkedIcon={false}
                id="switch-hours"
                offColor="#000"
                onColor="#000"
                />
                <label className="p__arial" htmlFor="switch-hours">12H</label>
            </div>
            <div className="settings__temperature">
                <label className="p__arial" htmlFor="switch-temperature">F</label>
                <TemperatureSwitch
                checked={isCelcius}
                onChange={temperatureOnChange}
                uncheckedIcon={false}
                checkedIcon={false}
                id="switch-temperature"
                offColor="#000"
                onColor="#000"
                />
                <label className="p__arial" htmlFor="switch-temperature">C</label>
            </div>
        </div>
  )
}

export default Settings