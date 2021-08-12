import React, { useEffect, useState } from 'react';
import axios from "axios";


function Imageb(){

const [a, b] = useState();
const [c, d] = useState();
const [e, f] = useState();

function clickedd(event){
    d(event.target.value);
}

 function clicked(e){
     e.preventDefault();
    console.log("hello");
    const config = {
        method: "POST",
        url: "https://reqres.in/api/users", 
        headers: {
        'Content-Type': "application/JSON",
          },
        data: {
            name: c
        }
    }
    axios(config).then((res) => {
        console.log(res);
        b(res.data.name);
    }).catch((error) => {
        console.log(error);
    })
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=87f6b40d9c895c6e7b5e9413f5ca6bc9").then((res) => {
        console.log(res);
      f(res.data.main.temp);
    }).catch((error) => {
        console.log(error);
    })
}
    return(
        <div>
          
            <input type = "text" onChange ={clickedd}  />
<button type = "submit" onClick = {clicked} >click</button> 
 {a} <br />  {e} 
        </div>
    );
}

export default Imageb;