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

function background(weather) {
  switch(weather) {
    case 1000:
      return "clear-day";
    case 1003:
      return "cloudy-1-day";
    case 1006:
      return "cloudy";
    case 1009:
      return "cloudy-3-day";
    case 1030:
      return "fog";
    case 1063:
      return "rainy-1-day";
    case 1066:
      return "snowy-1-day";
    case 1069:
      return "hail";

    case 1072:
      return "rain-and-sleet-mix";
    case 1087:
      return "isolated-thunderstorms";
    case 1114:
    case 1117:
      return "snowy-3";
    case 1135:
    case 1147:
      return "fog";
    case 1150:
      return "rainy-1";
    case 1153:
      return "rainy-2";

    case 1168:
    case 1171:
      return "rain-and-sleet-mix";
    case 1180:
    case 1183:
      return "rainy-1";
    case 1186:
    case 1189:
      return "rainy-2";
    case 1192:
    case 1195:
      return "rainy-3";

    case 1198:
    case 1201:
    case 1204:
    case 1207:
      return "rain-and-sleet-mix";
    case 1210:
    case 1213:
      return "snowy-1";
    case 1216:
    case 1219:
      return "snowy-2";  
      
    case 1222:
    case 1225:
      return "snowy-3";
    case 1237:
      return "frost";
    case 1240:
      return "rainy-1";
    case 1243:
      return "rainy-2";
    case 1246:
      return "rainy-3";
    case 1249:
    case 1252:
      return "rain-and-sleet-mix";

    case 1255:
      return "snowy-1";
    case 1258:
      return "snowy-3";
    case 1261:
      return "hail";
    case 1264:
      return "hail";
    case 1273:
      return "scattered-thunderstorms";
    case 1276:
      return "scattered-thunderstorms";
    case 1279:
      return "scattered-thunderstorms";
    case 1282:
      return "scattered-thunderstorms";
        
    default:
      return "error";
  }
  
}


function App() {
  //API Key from https://weatherapi.com/
  const APIKey = "1e457b42e1a84bb983a02639233011";
  const location = useLocation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);
  const [isTwelveHours, setIsTwelveHours] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);

  async function weatherCall() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location.latitude},${location.longitude}&days=10&aqi=yes`)
      const responseJSON = await response.json();
      if (responseJSON.current.hasOwnProperty("last_updated") && responseJSON.location.hasOwnProperty("name") && responseJSON.forecast.hasOwnProperty("forecastday")){
        setData(responseJSON);
        setIsLoading(false);      
        setBackgroundImage(background(responseJSON.current.condition.code));
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
    <div className="App" style={{backgroundImage: `url(./weather/background/${backgroundImage}.svg`}}>
      <AppContext.Provider value={{data, isLoading, isCelcius, isTwelveHours}}>
        <div className="app__header">
          <EnhancedCurrentWeather/>
          <Settings isCelcius={isCelcius} isTwelveHours={isTwelveHours} setIsCelcius={setIsCelcius} setIsTwelveHours={setIsTwelveHours}/>
        </div>
        <EnhancedHourlyWeather/>
        <EnhancedForecastWeather/>
        <EnhancedAirQuality/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
