import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";


function Weatherupdate(props) {
  const [weatherData, setWeatherData] = useState({ feedback: false });
  // const [feedback, setFeedback] = useState(false);
  const [city, setCity] = useState(props.location); // const [location, setLocation] = useState("");

  
  function search() {
    // city
    const apiKey = "8a582b67c117653fdcad72d407d325fe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
      event.preventDefault();
      
      search();
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  

  function handleResponse(response) {
    // console.log(response.data);
    
    
    setWeatherData({

      feedback: true,
      coords: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon:  response.data.weather[0].icon ,
      // `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      // alt: `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`,
      description: response.data.weather[0].description,
      hi: Math.round(response.data.main.temp_max),
      lo: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
     
      
    });
    
  }
  
  

  if (weatherData.feedback) {
    

  return (
    <div className="Weatherupdate">

      <div className="Location-display">
          {" "}
          Right now in 
          <div style={{ display: "inline-block" }}>
            <form
              onSubmit={handleSubmit}
              className="searchbox"
              id="searchbox"
              action="/action_page.php"
              style={{ margin: "auto", maxWidth: "300px" }}
              autoFocus="on"
            >
              <input
                type="text"
                onChange={updateCity}
                id="search-text-input"
                name="search"
                placeholder="your location..."
                autocomplete="off"
              />
              <button type="submit">
                <span className="iconify" data-icon="charm:search"></span>
              </button>
            </form>
          </div>

          {/* description */}
          <div
          className="text-capitalize"
            style={{ fontSize: "15px", marginLeft: "-66px", textAlign: "center", fontWeight: "normal" }}
          >
            {" "}
            {weatherData.description}{" "}
          </div>
        </div>
        <Weatherinfo data={weatherData} />
        <WeatherForecast  coordinates={weatherData.coords}/>
    </div>
  );
} else {
  search();
  return "Loading...";
}

}

export default Weatherupdate;
