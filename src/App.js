import CurrentWeather from "./components/CurrentWeather"
import ForecastWeather from "./components/ForecastWeather"
import HourlyWeather from "./components/HourlyWeather"
import "./App.css"
import { AppContext } from "./components/AppContext"
import useLocation from './components/useLocation'
import { useEffect, useState } from 'react'
import withLoading from "./components/withLoading"

function App() {
  //API Key from https://weatherapi.com/
  const APIKey = "1e457b42e1a84bb983a02639233011";
  const location = useLocation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);

  async function weatherCall() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location.latitude},${location.longitude}&days=10`)
      const responseJSON = await response.json();
      setData(responseJSON);
      setIsLoading(false);
  }
  useEffect(() => {
      if (location) {
          weatherCall()
      }
  }, [location])

  const EnhancedForecastWeather = withLoading(ForecastWeather);
  const EnhancedCurrentWeather = withLoading(CurrentWeather);
  const EnhancedHourlyWeather = withLoading(HourlyWeather);

  return (
    <div className="App">
      <AppContext.Provider value={{data, isLoading, isCelcius}}>
        <EnhancedCurrentWeather/>
        <EnhancedHourlyWeather/>
        <EnhancedForecastWeather/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
