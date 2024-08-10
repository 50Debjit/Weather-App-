import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({Info}){
    const Pic="https://media.wired.com/photos/65528c50f988bdfde9fae252/4:3/w_2132,h_1599,c_limit/india-dehli-science-GettyImages-1779066402.jpg"
    const Summer="https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.jpg";
    const Winter="https://seasonsyear.com/sites/default/files/images/seasons/winter-13.jpg"
    const Rainy="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
    return(
        <div className='infocard'>
           
            <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={Info.humidity>80?Rainy:Info.temp<20?Winter:Summer}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
         {Info.city}{
          Info.humidity>80? <ThunderstormIcon/>:Info.temp<20? < AcUnitIcon/>:<WbSunnyIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div> Temp={Info.temp}&deg;C</div>
          <div>Max Temp={Info. temp_max}&deg;C</div>
          <div>FeelsLike={Info.feels_like}&deg;C</div>
          <div>Weather={Info.weather}</div>
         <div>Humidity={Info. humidity}</div>
         <p>The weather can be described as {Info.weather} and maximum temperature is {Info.temp_max}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    )
}