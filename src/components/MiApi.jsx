import { useEffect } from "react";

const MiApi = ({info, setInfo}) =>{

  useEffect(() => {
    consulta();
  }, []);

  const consulta = async () => {
    const url = "https://restcountries.com/v3.1/subregion/europe";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
};

  return ( 
      
      <div className="f d-flex justify-content-around align-content-around flex-wrap">
      {info.map(((res) =>
      <div className="card" key={res.name.common}>
        <img src={res.flags.svg} className="card-img-top" alt={`Bandera de ${res.name.official}`} ></img>
        <div className="card-body">
          <h5 className="card-title">{res.name.official} </h5>
          <h6 className="card-title">Capital: {res.capital} </h6>
          <p className="card-text"> Ubicación: {res.subregion} </p>
          <p className="card-text"> Habitantes: {res.population} </p>

        </div>
      </div>    
      ))}
      </div>

    )
  } 

export default MiApi