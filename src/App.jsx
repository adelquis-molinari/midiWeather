import './App.css'
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from './layout/layout'
import PagInicio from '../page/pag-inicio.jsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<PagInicio />} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
