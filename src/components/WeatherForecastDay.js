import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {

    function max() {
        let max = Math.round(props.data.temp.max);
        return `${max}°`;
    }

    function min() {
        let min = Math.round(props.data.temp.min);
        return `${min}°`;
    }

     function ForecastDay() {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        // 8161b4309ee03faae957729ba7104797
        

        
        // let day = days[props.date.getDay()];

        
        return days[day];
    }

    
    return (
        <div>
            <div class="WeatherForecast-day">
                {ForecastDay()}
            </div>
            
            <div className="WeatherForecast-icon1">
                <WeatherIcon code=  {`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} width={40} height={40} />
                {/* <img src=  {props.data.weather[0].icon}
                alt={props.data.weather[0].description} width={40} height={40} /> */}
            </div>
                
            <div class="WeatherForecast-description">{props.data.weather[0].description}</div>

            <div class="WeatherForecast-temp">
                <span className="Max">{max()}</span>/ <span className="Min">{min()}</span>
            </div>
        </div>
        
    );
}

export default WeatherForecastDay;