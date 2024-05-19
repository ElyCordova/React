
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Error404 from './Components/Error404/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer/>}/>
          <Route exact path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route exact path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route exact path={'*'} element={<Error404/>}/>
        </Routes> 
      </BrowserRouter>
    </>  
  )
}

export default App