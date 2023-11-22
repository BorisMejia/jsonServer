
import React from 'react'
import Header from '../helpers/Header'
import axios from 'axios'
import{useState} from 'react'
import CrearPeliculas from './CrearPeliculas'

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([])
  const traerPeliculas = async () => {
    let listadoPeliculas = await axios.get('http://localhost:3001/peliculas')
    setPeliculas(listadoPeliculas.data)
  }

  return (
    <div>
        <Header/>
        <h1>Listado Peliculas</h1>
        <button onClick={traerPeliculas} type='button'>Mostrar Peliculas</button>
        {
          peliculas.map((pelicula)=>(
            <section>
              <p>Nombre: {pelicula.nombre}</p>
              <p>Calificacion: {pelicula.calificacion}</p>
              <p>Clasificacion: {pelicula.clasificacion}</p>
              <p>Año: {pelicula.ano}</p>
              <p>Descripcion: { pelicula.descripcion}</p>
            </section>
          ))
        }

    </div>
  )
}

export default ListarPeliculas