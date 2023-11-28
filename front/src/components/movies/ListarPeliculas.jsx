
import React from 'react'
import Header from '../helpers/Header'
import axios from 'axios'
import{useState, useEffect} from 'react'

/*const getPeliculas = async () =>{
  let respuesta = await axios.get("http://localhost:3001/peliculas")
  console.log(respuesta.data)
}*/

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([])
  const traerPeliculas = async () => {
    let listadoPeliculas = await axios.get('http://localhost:3001/peliculas')
    setPeliculas(listadoPeliculas.data)
    console.log(peliculas)
  }

  useEffect(() => {
    traerPeliculas()
  },[] )
  return (
    <div className='peliculas'>
        <Header/>
        <h1>Listado Peliculas</h1>
        {/* <button onClick={traerPeliculas} type='button'>Mostrar Peliculas</button> */}
        <section className='cards'>
        {
          peliculas.map((pelicula)=>(
            <section className='card' key={pelicula.id}>
              <p>Nombre: {pelicula.nombre}</p>
              <p>Calificacion: {pelicula.calificacion}</p>
              <p>Clasificacion: {pelicula.clasificacion}</p>
              <p>Año: {pelicula.ano}</p>
              <p>Descripcion: { pelicula.descripcion}</p>
            </section>
          ))
        }
        </section>
       

    </div>
  )
}

export default ListarPeliculas