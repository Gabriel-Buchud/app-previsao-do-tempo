/* eslint-disable react/prop-types */
import './InfoWeather.css'


function InfoWeather({ weather }) {

  return (

    <div className='weather-container'>
      <h2>{weather.name}, {weather.sys.country}</h2>

      <div className='info-weather'>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Icon" />
        <p className='temperatura'>{Math.round(weather.main.temp)}°C</p>
      </div>

      <div>
        <p className='descricao'>{weather.weather[0].description}</p>
      </div>

      <div className='detalhes'>
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade:{weather.main.humidity}%</p>
        <p>Pressão:{weather.main.pressure}</p>
      </div>

    </div>

  )

}

export default InfoWeather