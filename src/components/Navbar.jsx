import { Link } from 'react-router-dom'

function Navbar (){
    return (
        <header>
            <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary yext-white justify-content-between">
                <h4 className="mr-md-auto">
                    <a href="/" className="text-decoration-none text-white">BOOKS</a>
                </h4>
                <nav className="btn-group">
                    <Link to='/' className='btn btn-light'>Accueil</Link>
                    <Link to='/search' className='btn btn-light'>Rechercher</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar