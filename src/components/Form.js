import { React } from "react";
import { useState } from "react";
import { axios } from "axios";

function Form(props) {
  // const axios = require('axios');
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(props.location);

  function handleSubmit(event) {
    event.preventDefault();
    // alert(`It is 29° in ${city}`);
    setLocation(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

//   function showTemperature(response) {
//     console.log(response.data);
//   }

  // let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=8a582b67c117653fdcad72d407d325fe&units=metric`;
  // axios.get(url).then(showTemperature);

  return (
    <div className="Form">
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
        <div
          // id="description"
          style={{ fontSize: "15px", marginLeft: "65px" }}
        >
          {" "}
          {props.description}{" "}
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
        {location} {/* </span> */}
      </div>
      <p> The weather in {location} is 19°</p>
    </div>
  );
}

export default Form;
