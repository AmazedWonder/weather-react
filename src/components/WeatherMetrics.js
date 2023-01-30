import React, {useState} from "react";
import "./WeatherMetrics.css";

function WeatherMetrics(props) {
  const [unit, setUnit] = useState("celsius");

  function farenheitTemperature(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let temperature = props.celsius;
  if (unit === "fahrenheit") {
    temperature = props.celsius * 1.8 + 32;
  }
  temperature = Math.round(temperature);

    return (
      <div className="WeatherMetrics">
        <div className="Temperature">
          <span>
            {temperature}°
          </span>
        </div> 
        {unit === "celsius" && (
          <>
            <span>
              {/* <a href="/" onClick={celsiusTemperature} className={unit === "celsius" ? "unit" : "non-active"}> */}
                <b>°C</b>
              {/* </a> */}
            </span>
            {" "}
            <strong>|</strong>
            {" "}
            <span>
              <a href="/" onClick={farenheitTemperature} className={unit === "fahrenheit" ? "unit" : "non-active"}>
                <b>°F</b>
              </a>
            </span>
          </>
        )}
        {unit === "fahrenheit" && (
          <>
            <span>
              <a href="/" onClick={celsiusTemperature} className={unit === "celsius" ? "unit" : "non-active"}>
                <b>°C</b>
              </a>
            </span>
            {" "}
            |
            {" "}
            <span>
              {/* <a href="/" onClick={farenheitTemperature} className={unit === "fahrenheit" ? "unit" : "non-active"}> */}
                <b>°F</b>
              {/* </a> */}
            </span>
          </>
        )}
        {/* <span className="temperature">{temperature}°{unit.toUpperCase()}</span> */}
      </div>
    );

}

export default WeatherMetrics;






// anothr
// import React, { useState } from "react";
// import "./WeatherMetrics.css";

// function WeatherMetrics(props) {
//   const [unit, setUnit] = useState(props.celsius);
//   const [showTemperature, setShowTemperature] = useState(false);

//   function farenheitTemperature(event) {
//     event.preventDefault();
//     setUnit(props.celsius * 1.8 + 32);
//     setShowTemperature(true);
//   }

//   function celsiusTemperature(event) {
//     event.preventDefault();
//     setUnit(props.celsius);
//     setShowTemperature(true);
//   }

//   if (showTemperature) {
//     return (
//       <div className={unit === "celsius" ? "WeatherMetricsCelsius" : "WeatherMetricsFahrenheit"}>
//         <span>
//           <a
//             href="/"
//             onClick={celsiusTemperature}
//             className={unit === "celsius" ? "Nonactive" : "unit"}
//           >
//             <b>°C</b>
//           </a>
//         </span>
//         |
//         <span>
//           <a
//             className={unit === "fahrenheit" ? "Nonactive" : "unit"}
//             href="/"
//             onClick={farenheitTemperature}
//           >
//             <b>°F</b>
//           </a>
//         </span>
//       </div>
//     );
//   } else {
//     return <div />;
//   }
// }

// export default WeatherMetrics;
