import * as React from 'react';
import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function InfoBox({info}){
    const Init_Url = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const getImageUrl = (weather) => {
        const weatherImages = {
            "Clear": "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1374", // Sunny clear sky
            "Clouds": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1389", // Cloudy sky
            "Rain": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470", // Rainy weather
            "Snow": "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1508", // Snowy weather
            "Thunderstorm": "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1471", // Thunder and lightning
            "Mist": "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1433", // Misty/foggy weather
            "Drizzle": "https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=1470", // Light rain
        };
        
        return weatherImages[weather] || "https://images.unsplash.com/photo-1601297183305-6df142704ea2"; // Default to clear sky image
    }

    const getWeatherIcon = (weather) => {
        const icons = {
            "Clear": <WbSunnyIcon sx={{ color: '#FFB300' }}/>,
            "Clouds": <CloudIcon sx={{ color: '#78909C' }}/>,
            "Rain": <UmbrellaIcon sx={{ color: '#42A5F5' }}/>,
            "Snow": <AcUnitIcon sx={{ color: '#90CAF9' }}/>,
            "Thunderstorm": <ThunderstormIcon sx={{ color: '#616161' }}/>,
            "Mist": <FilterDramaIcon sx={{ color: '#B0BEC5' }}/>,
            "Drizzle": <WaterDropIcon sx={{ color: '#64B5F6' }}/>
        };
        return icons[weather] || <WbSunnyIcon />;
    }

    return(
        <div className="info-box">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="weather condition"
        height="140"
        image={getImageUrl(info.weather)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {info.city} {getWeatherIcon(info.weather)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <div>Temperature: {info.temp}°C</div>
            <div>Weather: {info.weather}</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Wind Speed: {info.wind_speed} km/h</div>
            <div>Clouds: {info.clouds}%</div>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}
