
import './form.css'

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
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

        </form>
    )
}

export default Form