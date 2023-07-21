
import { useState } from 'react';
import { Input } from '../components/atoms/Input/Input.component';
import { Boton } from '../components/atoms/Button/Boton.componentes';
import { CardPeque } from '../components/atoms/Cards/CardPeque';
import { useFetch} from '../hooks/useFetch.hooks';
import {useNavigate} from 'react-router-dom';
import { Button } from '../components/atoms/Button/Button.component';


export interface Tiempo {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
  CDNWeatherapiCOMWeather64X64Day119PNG = "//cdn.weatherapi.com/weather/64x64/day/119.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
  CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
  Clear = "Clear",
  Cloudy = "Cloudy",
  PartlyCloudy = "Partly cloudy",
  Sunny = "Sunny",
}

export enum WindDir {
  Nnw = "NNW",
  Nw = "NW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}



export const Tiempo = () => {

  const navigate = useNavigate();

  
  const [location, setLocation] = useState('Madrid')

  

  const {data, fetchData } = useFetch<Tiempo>({url: `https://api.weatherapi.com/v1/forecast.json?key=7063e0eef0a245ec9ef82322231307&q=${location}&days=3&aqi=no&alerts=no`});
      

  return (
    
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-teja to-beige h-screen w-screen p-2'>
      <h1 className='text-sm sm:text-4xl mt-2 mb-2'>PREDICCIÓN METEOROLÓGICA</h1>
      <div className='w-full sm:w-2/4 m-4 shadow-black shadow-2xl bg-verde/80 max-w-screen-md rounded-xl flex flex-col justify-center items-center' >
          <div className='flex flex-col min-h-1/3 gap-4 w-screen justify-center items-center'>
            <img src={data?.current.condition.icon} alt={data?.current.condition.text} />
            <h1 className='text-xs sm:text-xl'>Ciudad: {data?.location.name}</h1>
            <h1 className='text-xs sm:text-xl'>País: {data?.location.country}</h1>
            <h2 className='text-xs sm:text-xl'>Temperatura: {data?.current.temp_c}</h2>
            <h2 className='text-xs sm:text-xl'>Velocidad del viento: {data?.current.wind_kph}</h2>
          </div>
        <div className='flex flex-row justify-between w-full mt-8 gap-1 p-2'>
            {data?.forecast.forecastday.map((elemento) => (
              <CardPeque day={elemento}></CardPeque>
            ))}
        </div>

    <div className='flex flex-col sm:flex-row sm:space-x-4 '>
          <div className='flex flex-col mb-8 mt-5'>
              <div className='flex flex-col '>
                  <h2 className='text-xs sm:text-xl'> Ciudad: </h2>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className='border-2 rounded p-2 bg-teja/80 mt-3 grid place-content-center' >
                  <Boton text='Dime el tiempo' onClick={fetchData} />
              </div>
          </div>

              <div className='grid place-content-center'>
                  <Button text="Principal" onClick={() => navigate('/')} />
              </div>
        </div>      
      </div>
    </div>
  )
}