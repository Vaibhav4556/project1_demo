import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react"

// const API = 'http://localhost:4000';
const API = 'https://vaibhav1app.herokuapp.com';


function App() {
  const [mobiles,setMobiles ]= useState ([]);
 

  useEffect(() => {
     fetch(`${API}/mobiles`)
      .then(response=> response.json())
      .then(data => setMobiles(data));
  }, []);

  //API  http://localhost:4000/mobiles

  
  return (
    <div className="App">
      <div className="phone-list-container">
        {mobiles.map((mb) => (
          <Phone key={mb._id} mobile={mb} />
        ))}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  // const mobile = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus",
  // };

  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} />
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}

export default App;
