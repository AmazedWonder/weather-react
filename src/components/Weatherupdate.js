import { React } from "react";
import { useState } from "react";

function Weatherupdate(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  function farenheitTemperature(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * 1.8 + 32));

    // let temperature = props.temperature * 1.8 + 32;
    // ntwork
    // return Math.round(temperature);
    // alert(`${Math.round(temperature)}°F`);
  }

  function celsiusTemperature(event) {
    event.preventDefault();
    setTemperature(props.temperature);

    // let temperature = props.temperature;
    //  - 32 * .5556;
    // ntwork
    // return Math.round(temperature);
    // alert(`${temperature}°C`);
  }

  return (
    <div className="Weatherupdate">
      {/* Main Weather img */}
      <div>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt=""
          className="Flexbox"
        />
      </div>

      {/* Temperature display */}
      <div className="Temp">
        <span
        // id="D"
        >
          {temperature}°
        </span>
      </div>

      {/* Degree */}
      <div className="Degree">
        H:{props.hi}° {/* <span id="hi">33</span>&#176;  */}
        L:{props.lo}°{/* <span id="lo">18</span>&#176; */}
      </div>

      {/* Date */}
      <div
        className="Date"
        // id="d-date"
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
            //  id="C"
            onClick={celsiusTemperature}
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
            // id="F"
            onClick={farenheitTemperature}
          >
            {" "}
            <b>°F</b>{" "}
          </a>{" "}
        </span>
      </div>

      {/* Time */}
      <div
        className="Time"
        // id="time"
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
            {/* <span 
                id="humidity"> */}
            {props.humidity}%{/* </span>% */}
          </li>
          <li>
            Wind:
            {/* <span id="wind"> */}
            {props.wind}km/h
            {/* </span>km/h */}
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
}

export default Weatherupdate;
