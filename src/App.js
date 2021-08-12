import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import images from "./public/Weather icon.png";

function Weather(){

    const [a, b] = useState("");
    const [c, f] = useState("");
    const [y, z] = useState("");

    function Changed(event){
        f(event.target.value);
    }

function Clicked(e){
    e.preventDefault()
    console.log("clicked");
    const d = {c};
    
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=87f6b40d9c895c6e7b5e9413f5ca6bc9").then((resp) => {
        console.log(resp.data.main.temp);
        z(Math.round(resp.data.main.temp-273) + "°C");
     }).catch((error) => {
         console.log(error);
     })
   
  
    const config = {
        method: "POST" ,
        url: "https://reqres.in/api/users" ,
        headers: {
            "Content-type": "application/json"
        },
        data: JSON.stringify({temp: d})
    }
    axios(config).then((res) => {
        console.log(res.data);
        b("The Temperature in " + res.data.temp.c + " is");
    })
    .catch((error) => {
        console.log(error);
    })
}

return(<div id = "uy">
 <h1 className = "styl" >   <img src =  {images} alt = "Hello" className = "imager" />   WEATHER API </h1> 
    <form action = "" method = "post" >
<input type = "text" placeholder = "Enter City Name" id = "lolo" onChange = {Changed} ></input>
<button type = "submit" onClick = {Clicked}  >Click</button> 
<h1> {a}  {y}  </h1>
</form> 
</div>);
}

export default Weather;
