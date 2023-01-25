import React, { useState } from "react";
import axios from "axios";


function Weatherupdate(props) {
  const [weatherData, setWeatherData] = useState({ feedback: false });
  // const [feedback, setFeedback] = useState(false);
  // const [city, setCity] = useState("");
  // const [location, setLocation] = useState(props.location);

  // function farenheitTemperature(event) {
  //   event.preventDefault();
  //   setTemperature(Math.round(props.temperature * 1.8 + 32));

    // let temperature = props.temperature * 1.8 + 32;
    // ntwork
    // return Math.round(temperature);
    // alert(`${Math.round(temperature)}°F`);
  // }

  // function celsiusTemperature(event) {
  //   event.preventDefault();
  //   setTemperature(props.temperature);

    // let temperature = props.temperature;
    //  - 32 * .5556;
    // ntwork
    // return Math.round(temperature);
    // alert(`${temperature}°C`);
  // }

  function handleResponse(response) {
    console.log(response.data);
    
    setWeatherData({
      feedback: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      alt: `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`,
      description: response.data.weather[0].description,
      hi: Math.round(response.data.main.temp_max),
      lo: Math.round(response.data.main.temp_min),
      // date: "Tue, Dec 2022",
      // time: 09:45,
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
              // onSubmit={handleSubmit}
              className="searchbox"
              id="searchbox"
              action="/action_page.php"
              style={{ margin: "auto", maxWidth: "300px" }}
              autoFocus="on"
            >
              <input
                type="text"
                // onChange={updateCity}
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
            style={{ fontSize: "15px", marginLeft: "58px" }}
          >
            {" "}
            {weatherData.description}{" "}
          </div>
        </div>
        <div
          className="Location"
          // id="city"
          style={{ fontSize: "18px" }}
        >
          {" "}
          <iconify-icon icon="bytesize:location" style={{ fontSize: "large" }}>
            location{" "}
          </iconify-icon>{" "}
          {/* <span id="yLocation"> */}
          {weatherData.city} {/* </span> */}
        </div>
        <p> The weather in {weatherData.city} is {weatherData.temperature}19°</p>

         {/* Main Weather img */}
         <div>
          <img
          src={weatherData.icon}
          id="icon"
          alt={weatherData.alt}
          className="Flexbox"/>
          </div>

          {/* Temperature display */}
          
          <div className="Temp">
            <span>
              {Math.round(weatherData.temperature)}°
              </span>
          </div>

            {/* Degree */}
            <div className="Degree">
              H:{weatherData.hi}° 
              L:{weatherData.lo}°
            </div>

            {/* Date */}
            <div
              className="Date"
              
              style={{ left: "211px", fontWeight: "650", position: "absolute" }}
            >
              {props.date}
            </div>

            <div>
              <hr className="Rule" />
            </div>

            {/* CelsiusTemperature and FarenheitTemperature */}
            <div className="Measurement">
              <span>
                {" "}
                <a
                  href="/"
                  
                  // onClick={celsiusTemperature}
                  className="Active"
                >
                  {" "}
                  <b>°C</b>{" "}
                </a>{" "}
              </span>
              |
              <span>
                {" "}
                <a
                  className="Nonactive"
                  href="/"
                  // onClick={farenheitTemperature}
                >
                  {" "}
                  <b>°F</b>{" "}
                </a>{" "}
              </span>
            </div>

            {/* Time */}
            <div
              className="Time"
            >
              {props.time}
            </div>

            {/* Current button */}
            <div>
              <button className="Currentbutton">Current</button>
            </div>

            {/* Humidity and Wind */}
            <div className="Humiditywind col-2">
              <ul
                style={{
                  zIndex: "1000",
                  listStyle: "none",
                  fontSize: "12px",
                  color: "aliceblue",
                  position: "absolute",
                  top: "11px",
                  left: "-10px",
                  lineHeight: "2"
                }}
              >
                <li>
                  Humidity:
                  {weatherData.humidity}%
                </li>
                <li>
                  Wind:
                  {weatherData.wind}km/h
                </li>
              </ul>
            </div>

            {/* Forecast */}
            <div
              className="Weatherforecast"
              // id="forecast"
            ></div>
    </div>
  );
} else {
  const apiKey = "8a582b67c117653fdcad72d407d325fe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}

}

export default Weatherupdate;
