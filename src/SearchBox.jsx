import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({UpdateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    let ApiLink="https://api.openweathermap.org/data/2.5/weather"
    let ApiKey="90d52bf75515320b36c19cca5e461cb7";
    let getWeather= async()=>{
        try{
            let response=await fetch(`${ApiLink}?q=${city}&appid=${ApiKey}&units=metric`)
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        let result={
            city: city,
            temp: jsonresponse.main.temp,
            feels_like: jsonresponse.main.feels_like,
            tempMin:jsonresponse.main.temp_min,
            temp_max: jsonresponse.main.temp_max,
            humidity: jsonresponse.main.humidity,
            pressure: jsonresponse.main.pressure,
             weather: jsonresponse.weather[0].description
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }  
   };
    let handelChange=(event)=>{
       setCity(event.target.value);
     }
    let handelSubmit= async ( event)=>{
        try{
            event.preventDefault();
       console.log(city);
       setCity("");
       let newinfo= await getWeather();
       UpdateInfo(newinfo);
        }catch(err){
            setError(true);
        }
       
    }
    
    
    return(
        <div className='SearchBox'>
            <h3 style={{color:"yellow"}}>Search For the Weather</h3>
            <form onSubmit={handelSubmit}>
                
            <TextField  id="city" label="City Name" variant="outlined" required value={city} onChange={handelChange }  style={{border:"2px solid white"}}/><br></br><br></br>
            <Button  variant="contained" type="submit" style={{marginBottom:"1rem",color:"yellow",border:"1px solid yellow"}}>Search</Button> 
           {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </div>
    )
}