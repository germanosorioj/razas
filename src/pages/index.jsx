import labrador from '../media/Labrador.jpg';
import husky from '../media/Husky Siberiano.png';
import logoperro from '../media/logo-perro.jpg';
import CardRazas from "../components/CardRazasPerros";
function Index() {
    return (
        <div>
            <header>
                <ul className="navbar">
                    <li>
                        <img src={logoperro} alt="logo" className="logo" />
                    </li>
                    <li> <button className="button mainButton">Nuevo Post</button> </li>
                    <li>
                        <div className="buscar">
                            <input placeholder="Buscar una raza" />
                            <i className="fas fa-search button icono-busqueda"></i>
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
                        <CardRazas nombreRaza="Labrador" imagen={labrador} />
                        <CardRazas nombreRaza="Husky Siberiano" imagen={husky} />
                        <CardRazas nombreRaza="Labrador" imagen={labrador} />
                        <CardRazas nombreRaza="Husky Siberiano" imagen={husky} />
                    </ul>
                </section>
                <section>

                </section>
                <footer>

                </footer>
            </main>
            <footer>
            </footer>
        </div>
    )

}

export default Index;