import labrador from './media/Labrador.jpg';
import husky from './media/Husky Siberiano.png';
import logoperro from './media/logo-perro.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <ul className="navbar">
          <li>
            <img src={logoperro} alt="logo" className="logo" />
          </li>
          <li> <button className="button mainButton">Nuevo Post</button> </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" />
              <i className ="fas fa-search button icono-busqueda"></i>
            </div>
          </li>
          <li><button className="button secundaryButton">Login</button></li>
          <li><button className="button mainButton">Registro</button> </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="card-container">
            <li className="card">
              <div className="contenedor-imagen">
                <img src={labrador} alt="Labrador" />
              </div>
              <span className="tituloRaza">
                Labrador
              </span>

            </li>
            <li className="card">
              <div className="contenedor-imagen">
                <img src={husky} alt="Husky" />
              </div>
              <span className="tituloRaza">
                Husky Siberiano
              </span>

            </li>
          </ul>
        </section>
        <section>

        </section>
        <footer>

        </footer>
      </main>

    </div>
  );
}

export default App;
