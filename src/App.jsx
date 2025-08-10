import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails"; // هننشئه كمان شوية
import HomePage from "./pages/HomePage";

export default function App(){
  return (
    
      
        <Routes>
          <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MovieDetails/>}  />
      </Routes>
      
     
      
  
  );
}
