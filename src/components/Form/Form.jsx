import React from 'react'

const Form = ({gettingWeather}) => {


    const handlerSubmit = (e) => {
        e.preventDefault()
        gettingWeather(e.target.elements.city.value)

    }

    return (


        <form onSubmit={handlerSubmit}>
            <input className="form-control mb-4" type="text" name="city" placeholder="Город"/>
        </form>
    )
}

export default Form