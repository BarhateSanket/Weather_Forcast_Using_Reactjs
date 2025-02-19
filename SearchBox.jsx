import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "340de635bb41f187130cc259715f17b7";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.city.name,
            country: jsonResponse.city.country,
            temp: jsonResponse.list[0].main.temp,
            temp_max: jsonResponse.list[0].main.temp_max,
            temp_min: jsonResponse.list[0].main.temp_min,
            humidity: jsonResponse.list[0].main.humidity,
            wind_speed: jsonResponse.list[0].wind.speed,
            clouds: jsonResponse.list[0].clouds.all,
            weather: jsonResponse.list[0].weather[0].main,
            
        };
        console.log(result);
            return result;
        }
        catch(error){
            throw error;
        }
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();   
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(error){
            setError(true);
        }
    };

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br/> <br/>
            <Button variant="contained" type="submit" endIcon={<SearchIcon/>}>Search</Button>
            </form>
            {error && <p style={{color: "red"}}>Error fetching weather data</p>}
        </div>
    );
}

// 1. Wather Api key from openweathermap
