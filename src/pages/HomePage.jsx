import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

    

    return (
        <div>
            <h1>Carrera de caballos</h1>
            <Link to= "/crearJuego">Juego nuevo</Link>
        </div>
    )
}

export default HomePage
