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
            <Route path='/' element={<ItemListContainer greeting={'Todos los prductos'} />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productor por categoría'} />}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>           
          </Routes>        
      </BrowserRouter>
            
      </div>
  );
}

export default App
