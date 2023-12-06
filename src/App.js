import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import HourlyWeather from "./components/HourlyWeather";
import "./App.css";
import { AppContext } from "./components/AppContext";
import useLocation from './components/useLocation';
import { useEffect, useState } from 'react';
import withLoading from "./components/withLoading";
import Settings from "./components/Settings";
import AirQuality from "./components/AirQuality";

function App() {
  //API Key from https://weatherapi.com/
  const APIKey = "1e457b42e1a84bb983a02639233011";
  const location = useLocation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);
  const [isTwelveHours, setIsTwelveHours] = useState(true);

  async function weatherCall() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location.latitude},${location.longitude}&days=10&aqi=yes`)
      const responseJSON = await response.json();
      console.log(responseJSON)
      if (responseJSON.current.hasOwnProperty("last_updated") && responseJSON.location.hasOwnProperty("name") && responseJSON.forecast.hasOwnProperty("forecastday")){
        setData(responseJSON);
        setIsLoading(false);      
      }
      else{

        console.log("Something went wrong. Please check your API key and if the API is down.")
      }
  }
  useEffect(() => {
      if (location) {
          weatherCall()
      }
  }, [location])

  const EnhancedForecastWeather = withLoading(ForecastWeather);
  const EnhancedCurrentWeather = withLoading(CurrentWeather);
  const EnhancedHourlyWeather = withLoading(HourlyWeather);
  const EnhancedAirQuality = withLoading(AirQuality);

  return (
    <div className="App">
      <Settings isCelcius={isCelcius} isTwelveHours={isTwelveHours} setIsCelcius={setIsCelcius} setIsTwelveHours={setIsTwelveHours}/>
      <AppContext.Provider value={{data, isLoading, isCelcius, isTwelveHours}}>
        <EnhancedCurrentWeather/>
        <EnhancedHourlyWeather/>
        <EnhancedForecastWeather/>
        <EnhancedAirQuality/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
