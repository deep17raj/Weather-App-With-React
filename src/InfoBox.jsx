import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function WeatherApp({cityInfo}){
let imgUrl = "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return(
      <div>
        <div className='WeatherApp'>
            <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityInfo.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {cityInfo.temp}&deg;C</p>
          <p>Feels Like = {cityInfo.feelsLike}&deg;C</p>
          <p>Min temp = {cityInfo.minTemp}&deg;C</p>
          <p>Max temp = {cityInfo.maxTemp}&deg;C</p>
          <p>Humidity = {cityInfo.humidity}</p>
          <p> The Weather is {cityInfo.weather}.</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}