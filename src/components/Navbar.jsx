const Navbar = ({busqueda, setBusqueda, info, setInfo}) =>{
  
  const capturarPalabra = (e) =>{
    e.preventDefault()
    setBusqueda(e.target.value)
    const listaFiltrada = info.filter(pais => pais.name.official.toLowerCase().includes(busqueda))
    setInfo(listaFiltrada)    
  }

    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand">Estados de Europa</h3>

          <form onSubmit={(e) =>e.preventDefault()} className="d-flex" role="search">
            <input
              value={busqueda}
              onChange={capturarPalabra}
              className="form-control me-2"
              type="search"
              placeholder="Nombre del país"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    );
}

export default Navbar