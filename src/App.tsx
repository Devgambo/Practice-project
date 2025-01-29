import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomUser from "./pages/RandomUser";
import Home from "./pages/Home";
import JokePage from "./pages/JokePage";
import Quote from "./pages/Quote";
import Cats from "./pages/Cats";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/getuser' element={<RandomUser/>} />
        <Route path='/getjoke' element={<JokePage/>} />
        <Route path='/getquote' element={<Quote/>} />
        <Route path='/getcats' element={<Cats/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;