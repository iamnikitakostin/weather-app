import { useContext, useEffect, useState } from 'react'
import { AppContext } from "./AppContext"


function CurrentWeather() {
    const weather = useContext(AppContext);

    

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (weather.isLoading === false){
            setIsLoading(false);
            console.log(weather)
        }
    }, [weather])


    if (isLoading === false){
        return (
            <div className="weather__today">
                <div className="today__location">
                    {weather.data.location.name}
                </div>
                <div className="today__temperature">
                    {weather.data.current.temp_c}°
                </div>
                <div className="today__condition">
                    {weather.data.current.condition.text}
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
    else {
        return (
            <div className="weather__today">
                <div>
                    Loading...
                </div>
            </div>
        )
    }
}

export default CurrentWeather