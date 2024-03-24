import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {
  
  const key = "e165b9c683c0bb393e0bacfe61b65d29";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Ülke veya Şehir Girin...." class="w-[250px] my-5 px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
      <City city={city}/>
    </div>
  );
}

export default App;
