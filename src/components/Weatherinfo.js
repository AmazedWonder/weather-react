import React from "react";
import Currentdate from "./Currentdate";
import Upgradedtime from "./Upgradedtime";
import WeatherMetrics from "./WeatherMetrics";
import WeatherIcon from "./WeatherIcon";
import "./Weatherinfo.css";

function Weatherinfo(props) {
    return(
        <div className="Weatherinfo">

            <div className="Location" style={{ fontSize: "18px" }}>
                {" "}
                <iconify-icon icon="bytesize:location" style={{ fontSize: "large" }}>
                location{" "}
                </iconify-icon>{" "}
                {props.data.city}
            </div>
            {/* <p> The weather in {props.data.city} is {Math.round(props.data.temperature)}°</p> */}
            
            {/* Main Weather icon */}
            <div className="Flexbox">
                <WeatherIcon code=  {`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt={props.data.description} width={120} height={120} />
                
                {/* <img
                src={props.data.icon}
                // id="icon"
                alt={props.data.description}
                className="Flexbox"/> */}
            </div>

            {/* Temperature display */}
                
            {/* <div className="Temp">
                <span>
                    {props.data.temperature}°
                    </span>
            </div> */}

            {/* Degree */}
            <div className="Degree">
                H:{props.data.hi}° 
                L:{props.data.lo}°
            </div>

            {/* Date */}
            <div
                className="Date"
                    
                style={{ left: "214px", fontWeight: "580", position: "absolute" }}
            >
                <Currentdate date={props.data.date} />
            </div>

            <div>
                <hr className="Rule" />
            </div>

            {/* CelsiusTemperature and FarenheitTemperature */}
            <div className="Metrics1">
                <WeatherMetrics celsius={props.data.temperature} />
                   
            </div>

            {/* Time */}
            <div
                className="Time"
            >
                <Upgradedtime time={props.data.date} />
            </div>

            {/* Current button */}
            {/* <div>
                <button className="Currentbutton">Current</button>
            </div> */}

            {/* Humidity and Wind */}
            <div className="Humiditywind col-2">
                <ul
                    style={{
                        zIndex: "1000",
                        listStyle: "none",
                        fontSize: "13.5px",
                        color: "aliceblue",
                        position: "absolute",
                        top: "11px",
                        left: "-10px",
                        lineHeight: "2"
                    }}
                    >
                    <li>
                        Humidity: {""}
                        {props.data.humidity}%
                    </li>
                    <li>
                        Wind: {""}
                        {props.data.wind}km/h
                    </li>
                </ul>
            </div>

        
        </div>
    );
}


export default Weatherinfo;