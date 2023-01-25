import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [feedback, setFeedback] = useState(false);
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(props.location);

  // function handleSubmit(event) {
  //   event.preventDefault();
    // alert(`It is 29° in ${city}`);
  //   setLocation(`${city}`);
  // }

  // function updateCity(event) {
  //   setCity(event.target.value);
  // }

  // function showTemperature(response) {
  //   console.log(response.data);
  // }

  function handleResponse(response) {
    console.log(response.data)
    setCity(response.data.main.name)
  }
  
  

  if (feedback) {
    return (
      <div className="Form">
        
      </div>
    );
  } else {
    const apiKey = "8a582b67c117653fdcad72d407d325fe";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }

  
}

export default Form;
