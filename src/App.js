import CurrentWeather from "./components/CurrentWeather"
import ForecastWeather from "./components/ForecastWeather"
import HourlyWeather from "./components/HourlyWeather"
import "./App.css"

function App() {
  return (
    <div className="App">
      <CurrentWeather/>
      <HourlyWeather/>
      <ForecastWeather/>
    </div>
  );
}

export default App;
