import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import rutasMenu from '/src/components/routes/rutasMenu.jsx'
let router = createBrowserRouter(rutasMenu)

function App() {

  return (
    <section className='container'>
        <RouterProvider router={router}/>
    </section>
  )
}

export default App
