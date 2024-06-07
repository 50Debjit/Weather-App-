import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const[weatherInfo, setWeatherinfo]=useState({
        city:"Delhi",
        feels_like:24.84,
        temp:25,
        tempmin:25.05,
        temp_max:25.05,
        weather:"Haze",
        humidity:63,
    })
    let UpdateInfo=(newinfo)=>{
        setWeatherinfo(newinfo);
    }
    return(
        <div style={{border:"2px solid red"}}>
            <h3>Weather Report</h3>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox Info={weatherInfo}/>
            <br></br>
        </div>
    )
}