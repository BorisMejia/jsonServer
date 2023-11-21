import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import ListarPeliculas from './components/movies/ListarPeliculas'
import ErrorNotFound from './components/helpers/ErrorNotFound'
let router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/peliculas',
    element: <ListarPeliculas/>,
    errorElement: <ErrorNotFound/>
  }
])

function App() {

  return (
    <section>
        <RouterProvider router={router}/>
    </section>
  )
}

export default App
