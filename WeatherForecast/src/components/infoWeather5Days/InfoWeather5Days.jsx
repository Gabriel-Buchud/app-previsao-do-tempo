
import './InfoWeather5Days.css'

function InfoWeather5Days({ weather5Days }) {
  console.log(weather5Days);

  let dailyForecast = {};

  if (weather5Days && weather5Days.list) {
    for (let forecast of weather5Days.list) {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();

      if (!dailyForecast[date]) {
        dailyForecast[date] = forecast
      }
    }
  }

  const next5Days = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', });

    return newDate;
  }

  return (
    <div className='weather-container'>
      <h3>Próximos 5 Dias</h3>

      <div className='weather-list'>
        {next5Days.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className='forecast-day'>{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="Icon"
            />
            <p className='forecast-description'>{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoWeather5Days;
