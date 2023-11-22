import Home from "../Home";
import ErrorNotFound from "../helpers/ErrorNotFound";
import ListarPeliculas from "../movies/ListarPeliculas";

export let rutasMenu = [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/peliculas',
      element: <ListarPeliculas/>,
      errorElement: <ErrorNotFound/>
    }
]  