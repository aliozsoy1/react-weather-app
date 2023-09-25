import React from 'react'

const City = ({ city }) => {
    console.log(city);
  return (<div>
    <div className='w-[350px] rounded-xl py-10 shadow-xl mx-auto'>
        <img className='w-[60px] rounded-full bg-gradient-to-b from-cyan-500 to-blue-500 mx-auto' src={`http://openweathermap.org/img/w/${city?.weather[0].icon}.png`} />
        <h1 className="text-5xl">{city?.name}</h1>
        <h1 className="text-3xl">{city?.main.temp} °C</h1>
        <h1 className="text-2xl">{city?.weather[0].main}</h1>
    </div>
  </div>
  )
}

export default City;