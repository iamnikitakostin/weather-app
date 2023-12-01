import CurrentWeather from "./components/CurrentWeather"
import ForecastWeather from "./components/ForecastWeather"
import HourlyWeather from "./components/HourlyWeather"
import "./App.css"
import { AppContext } from "./components/AppContext"
import useLocation from './components/useLocation'
import { useEffect, useState } from 'react'

function App() {
  //API Key from https://weatherapi.com/
  const APIKey = "1e457b42e1a84bb983a02639233011";
  const location = useLocation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function weatherCall() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location.latitude},${location.longitude}&days=14`)
      const responseJSON = await response.json();
      setData(responseJSON);
      setIsLoading(false);
  }
  useEffect(() => {
      if (location) {
          weatherCall()
      }
  }, [location])

  return (
    <div className="App">
      <AppContext.Provider value={{data, isLoading}}>
        <CurrentWeather/>
        <HourlyWeather/>
        <ForecastWeather/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
