import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  let [cityInfo, setCityInfo] = useState({
    city: "City",
    temp: 16.5,
    feelsLike: 14.8,
    minTemp: 13.4,
    maxTemp: 18.2,
    humidity: 38,
    weather: "fog",
  });
  let updateInfo = (newInfo)=>{
        setCityInfo(newInfo)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox cityInfo={cityInfo} />
    </div>
  );
}
