import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  
  return (

    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <ItemListContainer greeting={'Bienvenidos'} />
            <ItemDetailContainer />
          </Routes>        
      </BrowserRouter>
            
      </div>
  );
}

export default App
