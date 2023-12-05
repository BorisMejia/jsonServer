import { useState } from "react"
import  Swal from 'sweetalert2'
import axios from "axios"
import { v4  } from 'uuid'
import { useNavigate } from "react-router-dom"

const CrearPelicula = () => {
  const [nombre,setNombre]= useState('')
  const [calificacion,setCalificacion]= useState('')
  const [clasifiacion,setClasificacion]= useState('')
  const [anio,setAnio]= useState('')
  const [Descripcion,setDescripcion]= useState('')
  const [peliculas, setPeliculas] = useState([]);
  let redireccion = useNavigate()

  const traerPeliculas = async () => {
    let listadoPeliculas = await axios.get("http://localhost:3001/peliculas");
    setPeliculas(listadoPeliculas.data);
  };

 async function addPelicula(){
  
 await axios.post('http://localhost:3001/peliculas',{

  id:v4(),
  nombre,
  calificacion,
  clasifiacion,
  anio,
  Descripcion,
  idGenero: (Math.random()*10).toFixed(0)
 })
 
  }
 
  function agregarPelicula(){
    
    Swal.fire({
      title: "Estas seguro que deseas crear la pelicula?",
      text: "luego podra eliminar la pelicula",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si crear pelicula"
    }).then((result) => {
      if (result.isConfirmed) {
        addPelicula()
        Swal.fire({
          title: "Creada",
          text: "Tu pelicula ha sido creada.",
          icon: "success",
          confirmButtonColor:"green"
          
        });
        redireccion('/peliculas')
      }
    });
  }
  return (   
    <div>

      <div className="form-container">
      <h2>Formulario de Captura</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input onChange={(e)=>setNombre(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Calificacion:</label>
          <input onChange={(e)=>setCalificacion(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Clasificacion:</label>
          <input onChange={(e)=>setClasificacion(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Año:</label>
          <input onChange={(e)=>setAnio(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Descripcion:</label>
          <input onChange={(e)=>setDescripcion(e.target.value)} type="text" required />
        </div>
        
        <button onClick={agregarPelicula} type="button">Enviar</button>
      </form>
    </div>
    </div>
  )
}

export default CrearPelicula