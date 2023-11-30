import React from 'react'

function CurrentWeather() {
  return (
    <div className="weather__today">
        <div className="today__location">
            Moscow
        </div>
        <div className="today__temperature">
            67°
        </div>
        <div className="today__condition">
            Sunny
        </div>
        <div className="today__range">
            <div className="range__high">
                H:79°
            </div>
            <div className="range__low">
                L:49°
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather