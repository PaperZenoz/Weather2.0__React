import React from 'react'

const Weather = ({info}) => {
    return (
        <div>
            <p><strong>Ветер:</strong> <i>Скорость: </i>{info.wind.speed},<i> Направление: {info.wind.deg}</i></p>
            <p><strong>Видимость:</strong> {info.visibility}</p>
            <p><strong>Температура:</strong> {info.main.temp}</p>
            <p><strong>Ощущается как:</strong> {info.main.feels_like}</p>
            <p><strong>Минимальная температура:</strong> {info.main.temp_min}</p>
            <p><strong>Максимальная температура:</strong> {info.main.temp_max}</p>
        </div>
    )
}

export default Weather


