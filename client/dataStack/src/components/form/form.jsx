
import './form.css'
import { useState } from 'react'
const Form = () => {
    const [resultado, setResultado] = useState(0)
    const [hidden, setHidden] = useState(true)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (e.target.superficie.value == 0 || e.target.habitaciones.value == 0 || e.target.banos.value == 0) {
            alert('No puedes dejar espacios en blanco')
        }
        else{
            const response = await fetch('http://localhost:5000/predecir', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    surface: e.target.superficie.value,
                    bedrooms: e.target.habitaciones.value,
                    restrooms: e.target.banos.value
                })
            })
            const final = await response.json()
            setResultado(final.prediction.toFixed(2))
            setHidden(false)
        }
    }
    return (
        <form action="post" className="formulario" onSubmit={handleSubmit}>

            <label htmlFor="superficie">Superficie</label>
            <input type="number" id="superficie" />

            <label htmlFor="banos">Baños</label>
            <input type="number" id="banos" />

            <label htmlFor="habitaciones" className="habitaciones">Habitaciones</label>
            <input type="number" id="habitaciones" />

            <button type="submit" className="button calcular" >Calcular</button>

            <p hidden={hidden} >{resultado} €</p>
        </form>

        
    )
}

export default Form