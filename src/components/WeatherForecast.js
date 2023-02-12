import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";



function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    // if coordinates changes
    // setLoaded to false
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        //  console.log(response.data);
         setForecast(response.data.daily);
         setLoaded(true);
    }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div class="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div class="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast}/>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })};
                    
                </div>
            </div>
        );
    } else {
        
        let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        
        return null;

    }
    
}

export default WeatherForecast;