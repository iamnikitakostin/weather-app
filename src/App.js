import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";
import "./App.css";
import { AppContext } from "./components/AppContext/AppContext";
import useLocation from './components/useLocation/useLocation';
import { useEffect, useState } from 'react';
import withLoading from "./components/withLoading/withLoading";
import Settings from "./components/Settings/Settings";
import AirQuality from "./components/AirQuality/AirQuality";
import Humidity from "./components/Humidity/Humidity"
import ChangeCity from "./components/ChangeCity/ChangeCity";

function background(weather, isDay) {
  switch(weather) {
    case 1000:
      return isDay === 1 ? "clear-day" : "clear-night";
    case 1003:
      return isDay === 1 ? "cloudy-1-day" : "cloudy-1-night";
    case 1006:
      return isDay === 1 ? "cloudy" : "cloudy-1-night";
    case 1009:
      return isDay === 1 ? "cloudy-3-day" : "cloudy-3-night";
    case 1030:
      return isDay === 1 ? "fog" : "fog-night";
    case 1063:
      return isDay === 1 ? "rainy-1-day" : "rainy-1-night";
    case 1066:
      return isDay === 1 ? "snowy-1-day" : "snowy-1-night";
    case 1069:
      return "hail";
    case 1072:
      return "rain-and-sleet-mix";
    case 1087:
      return isDay === 1 ? "isolated-thunderstorms-day" : "isolated-thunderstorms-night";
    case 1114:
    case 1117:
      return isDay === 1 ? "snowy-3-day" : "snowy-3-night";
    case 1135:
    case 1147:
      return isDay === 1 ? "fog-day" : "fog-night";
    case 1150:
      return isDay === 1 ? "rainy-1-day" : "rainy-1-night";
    case 1153:
      return isDay === 1 ? "rainy-2-day" : "rainy-2-night";
    case 1168:
    case 1171:
      return "rain-and-sleet-mix";
    case 1180:
    case 1183:
      return isDay === 1 ? "rainy-1-day" : "rainy-1-night";
    case 1186:
    case 1189:
      return isDay === 1 ? "rainy-2-day" : "rainy-2-night";
    case 1192:
    case 1195:
      return isDay === 1 ? "rainy-3-day" : "rainy-3-night";
    case 1198:
    case 1201:
    case 1204:
    case 1207:
      return "rain-and-sleet-mix";
    case 1210:
    case 1213:
      return isDay === 1 ? "snowy-1-day" : "snowy-1-night";
    case 1216:
    case 1219:
      return isDay === 1 ? "snowy-2-day" : "snowy-2-night";
    case 1222:
    case 1225:
      return isDay === 1 ? "snowy-3-day" : "snowy-3-night";
    case 1237:
      return isDay === 1 ? "frost-1-day" : "frost-1-night";
    case 1240:
      return isDay === 1 ? "rainy-1-day" : "rainy-1-night";
    case 1243:
      return isDay === 1 ? "rainy-2-day" : "rainy-2-night";
    case 1246:
      return isDay === 1 ? "rainy-3-day" : "rainy-3-night";
    case 1249:
    case 1252:
      return "rain-and-sleet-mix";
    case 1255:
      return isDay === 1 ? "snowy-1-day" : "snowy-1-night";
    case 1258:
      return isDay === 1 ? "snowy-3-day" : "snowy-3-night";
    case 1261:
      return "hail";
    case 1264:
      return "hail";
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      return isDay === 1 ? "scattered-thunderstorms-day" : "scattered-thunderstorms-night";
    default:
      return "error";
  }
}



function App() {
  //API Key from https://weatherapi.com/
  const APIKey = "1e457b42e1a84bb983a02639233011";
  let initialLocation = useLocation();
  const [location, setLocation] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);
  const [isTwelveHours, setIsTwelveHours] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);

  async function weatherCall() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location.latitude},${location.longitude}&days=3&aqi=yes`);
    const responseJSON = await response.json();
    if (responseJSON.current.hasOwnProperty("last_updated") && responseJSON.location.hasOwnProperty("name") && responseJSON.forecast.hasOwnProperty("forecastday")){
      setData(responseJSON);
      setIsLoading(false);
      setBackgroundImage(background(responseJSON.current.condition.code, responseJSON.current.is_day));
    }
    else{
      console.log("Something went wrong. Please check your API key and if the API is down.")
    }
  }

  useEffect(() => {
    setLocation(initialLocation);
  }, [initialLocation]);

  useEffect(() => {
    if (location) {
      weatherCall()
    }
  }, [location])



  const EnhancedForecastWeather = withLoading(ForecastWeather);
  const EnhancedCurrentWeather = withLoading(CurrentWeather);
  const EnhancedHourlyWeather = withLoading(HourlyWeather);
  const EnhancedAirQuality = withLoading(AirQuality);
  const EnhancedHumidity = withLoading(Humidity)

  return (
    <div className="App" style={{backgroundImage: `url(./weather/background/${backgroundImage}.svg`}}>
      <AppContext.Provider value={{data, isLoading, isCelcius, isTwelveHours}}>
        <div className="app__header">
          <EnhancedCurrentWeather/>
          <Settings isCelcius={isCelcius} isTwelveHours={isTwelveHours} setIsCelcius={setIsCelcius} setIsTwelveHours={setIsTwelveHours}/>
          <ChangeCity setLocation={setLocation} isLoading={isLoading}/>
        </div>
        <EnhancedHourlyWeather/>
        <EnhancedForecastWeather/>
        <div className="app__footer">
          <EnhancedAirQuality/>
          <EnhancedHumidity/>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
