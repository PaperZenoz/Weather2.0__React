import React, {useState} from 'react';
import './App.css';
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";


const API_KEY = 'f666a69fb4b644add954abc6b276fbc1'



const App = () => {
    const [info, setInfo] = useState('')

    const [loading, setLoading] = useState(true)



    const gettingWeather = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${API_KEY}&units=metric`)
            .then(response => response.json()).then(info => {
            if(info.wind !== undefined){
                setInfo(info)
                setLoading(false)
            }

        })
    }

    return (
        <div className="container">
            <div className="card text-white bg-dark mt-4">
                <div className="card-header"><Info/></div>
                <div className="card-body">
                    <Form gettingWeather={gettingWeather}/>
                    {loading ? (<p>Введите город</p>) : <Weather info={info}/>}
                </div>
            </div>
        </div>







    )


}

export default App;
