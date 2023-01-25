// import logo from './logo.svg';
import './App.css';
// import Form from "./components/Form";
import Sourcecode from "./components/Sourcecode";
import "./components/Sourcecode.css";
import "./components/Form.css";
import Weatherupdate from "./components/Weatherupdate";
import "./components/Weatherupdate.css";


function App() {
  return (
    <div className="App">
      
      
      <div className="Container">
        <div>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/056/864/original/weatherbg5.jpg?1670417343"
            alt="city"
            className="imageOne"
          />
        </div>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Background">
          {/* <Form description="Sunny" location="New York" /> */}
          

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
