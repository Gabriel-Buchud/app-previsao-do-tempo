import { useState, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import InfoWeather from './components/infoWeather/InfoWeather';
import InfoWeather5Days from './components/infoWeather5Days/InfoWeather5Days';

function App() {
  const [weather, setWeather] = useState(null);
  const [weather5Days, setWeather5Days] = useState(null);

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "e176dffaf72a20982f47fb38d7a89bc6";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5days);
  
    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5days.data);
  }
  

  // faz com que o imput aceite enter
  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão do enter de quebrar linha
        searchCity();
      }
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('keydown', handleEnterKey);

    // Cleanup do event listener quando o componente for desmontado
    return () => {
      inputElement.removeEventListener('keydown', handleEnterKey);
    };
  }, []);

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button className="search-button" onClick={searchCity}>
        <span>Buscar</span>
      </button>

      {weather && <InfoWeather weather={weather} />}
      {weather5Days && <InfoWeather5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
