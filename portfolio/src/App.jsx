
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './components/index/Index'


function App() {


  return (
    <>
       <BrowserRouter>
     <Routes>
     <Route path='/' Component={Index}/>
     
     
     

     




     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
