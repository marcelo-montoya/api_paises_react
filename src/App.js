import { useState } from "react";
import Navbar from './components/Navbar'
import MiApi from "./components/MiApi";
import Footer from './components/Footer'

function App() {

  const [busqueda, setBusqueda] = useState("")
  const [info, setInfo] = useState([])

  return (
    <div className="App">
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} info={info} setInfo={setInfo}/>
      <MiApi info={info} setInfo={setInfo} />
      <Footer/>
    </div>
  );
}

export default App;
