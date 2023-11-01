import { BrowserRouter, Route, Routes as RoutesDOM } from "react-router-dom";
import { Pokemon } from "../pages/Pokemon/index";
import { Home } from "../pages/Home/Home.jsx";


export default function Routes(){
    return(
      <>
        <BrowserRouter>
          <RoutesDOM>
            <Route path='/' element={<Home/>}/>
            <Route path="/pokemon" element={ <Pokemon /> }/>
          </RoutesDOM>
        </BrowserRouter>
      </>
    );
}