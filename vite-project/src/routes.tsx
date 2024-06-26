import Home from './pages/home/index.tsx'
import Form from './pages/form/index'
import Sobre from './pages/sobre/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import Tarefas from './pages/tarefas/index'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound />},
  { path: '/form', element: <Form />},
  { path: '/sobre', element: <Sobre />},
  { path: '/tarefas', element: <Tarefas />}
])

export default router
