import React,{useState} from "react";
import axios from "axios";

/*if(typeof data.main != "undefined")
{
  if(data.weather[0].main == "Clouds")
  {
    emoji = "fa-cloud"
      }
      else if(data.weather[0].main == "Thunderstorm"){
          emoji = "fa-bolt"
        }
      else if(data.weather[0].main == "Drizzle"){
        emoji = "fa-cloud-rain"
      }
      else if(data.weather[0].main == "Rain"){
        emoji = "fa-cloud-shower-heavy"
      }
      else if(data.weather[0].main == "Snow"){
        emoji = "fa-snow-flake" 
      }
      else{
        emoji ="fa-smog"
      }
  }   
}*/
function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=68907bf609585ee2ef82afc4cdc53829`
  const searchLocation = (event) =>{
    if (event.key ==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    } 
  }
  const dateForm = (d)=>{

    let months =["January","February","March","April","May","June","July","August","September","October","November","December"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month}, ${year}`
  }
    let emoji = null

    if(typeof data.main != "undefined"){
      if(data.weather[0].main === "Clouds"){
        emoji = <img src=""/>
      }
      else if(data.weather[0].main ==="Thunderstorm"){
        emoji = "fa-bolt"
      }
      else if(data.weather[0].main ==="Drizzle"){
        emoji = "fa-cloud-rain"
      }
      else if(data.weather[0].main === "Rain"){
        emoji = "fa-cloud-rain"
      }
      else if(data.weather[0].main === "Snow"){
        emoji = "fa-snow-flake"
      }
      else if(data.weather[0].main === "Clear"){
        emoji = "fa-sun"
      }
      else if(data.weather[0].main ==="Foggy"){
        emoji ="fa-fog"
      }
    }

  return (
  <div className="app">
  <div className="search">
    <input value ={location}
           onChange={event => setLocation(event.target.value)}
           onKeyPress={searchLocation}
           placeholder='Enter Location'
           type="text"
    />
  </div>
  <div className="container">
    <div className="top">
    <div className="location"><p>{data.name}</p></div>
    <div className="temp">{data.main ?<h1>{data.main.temp}°C</h1>:null}</div>
    <div className="description">{data.weather?<p>{data.weather[0].main}</p>:null}</div>
    </div>      
    <div className="middle">
    <div className="icon"><i className="fa-solid fa-clouds"></i></div>  
    <div className="date"><p>{dateForm(new Date())}</p></div>
    </div>
    
    <div className="bottom">
    <div className="feels">
    <p>Feels like</p>
      {data.main?<p className="bold">{data.main.feels_like}°C</p>:null}
    
    </div>
    <div className="humidity">
      <p>Humidity</p>
      {data.main ?<p className="bold">{data.main.humidity}%</p>: null}
      
      </div>
    <div className="wind">
      <p>Wind Speed</p>
    {data.wind?<p className="bold">{data.wind.speed}MPH</p>:null }
      
      </div>
    </div>
  </div>
</div>);
}

export default App;