// import logo from './logo.svg';
import './App.css';
import Sourcecode from "./components/Sourcecode";
import "./components/Sourcecode.css";
import Weatherupdate from "./components/Weatherupdate";
import "./components/Weatherupdate.css";
import cityy1img from "./Images/cityy1img.jpg";


function App() {
  return (
    <div className="App">
      
      
      <div className="Container">
        <div>
          <img
            src={cityy1img}
            alt="city"
            className="imageOne"
          />
        </div>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Background">
          

          <Weatherupdate
            temperature={29}
            hi={33}
            lo={18}
            date="Tue, Dec 2022"
            time={"09:45"}
            humidity={77}
            wind={8}
            description="Sunny" 
            location="New York"
          />
        </div>
        
        
      </div>
      <Sourcecode />
    </div>
  );
}

export default App;
