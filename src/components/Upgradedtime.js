import React from "react";



function Upgradedtime(props) {

    let hours = props.time.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    
    let minutes = props.time.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    // return `${hours}:${minutes}`;
    
    
    return <div>
       {hours}:{minutes}
    </div>
}



export default Upgradedtime;