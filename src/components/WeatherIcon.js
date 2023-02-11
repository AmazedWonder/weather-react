import React from "react";

function WeatherIcon(props) {

    return (
        <img src= {props.code} 
       
        alt={props.alt} width={props.width} height={props.height} />
        );
    // const codeMapping = {
    //    "01d": "CLEAR_DAY",
    //    "01n": "CLEAR_NIGHT",
    // };



    // if (props.code === "01d") {

    
    //     return (
    //     <img src= {codeMapping[props.code]}
    //     alt={props.alt} width={props.width} height={props.height} />
    //     );
    // }
    // else {
    //     return (
    //         <img src= {`http://openweathermap.org/img/wn/${props.code}@2x.png`}
    //     alt={props.alt} width={40} height={40} />
    //     );
    // }
}

export default WeatherIcon;