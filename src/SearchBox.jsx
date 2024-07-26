import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");

const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "b14220460667189f6c0ceee9c40c0999";

let getWeatherInfo = async()=>{
    let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await response.json();
    let result = {
        city:city,
        temp:jsonRes.main.temp,
        minTemp:jsonRes.main.temp_min,
        maxTemp:jsonRes.main.temp_max,
        humidity:jsonRes.main.humidity,
        feelsLike:jsonRes.main.feels_like,
        weather:jsonRes.weather[0].description
    }
    console.log(result);
    return result
}

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let weatherInfo = await getWeatherInfo();
    updateInfo(weatherInfo)
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Search City"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
