import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBooks';
import { addBook } from '../redux/actions/actionAddBooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function SearchBooks () {
    const [title, setTitle] = useState('');
    const state = useSelector(state => state.search);
    const dispatch = useDispatch();
    const notify = () => toast("Livre enregistré");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchBooks(title))
    }

    const handleSave = (title, author) => {
        const bookToSave ={
            title: title,
            author: author
        }
        dispatch(addBook(bookToSave))
        notify()
    }

    const displayFetchedBooks = state.isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
    : 
    state.error !== ''? (
        <p>{state.error}</p>
    )
    : (
        state.fetchedBooks.map(data => {
            return (
                <div className="accordion-item" key={data.id}>
                    <h2 className="accordion-header" id={`heading${data.id}`}>
                        <button 
                            className="accordion-button" 
                            type="button"
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${data.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${data.id}`}
                        >
                        {data.volumeInfo.title}
                        </button>
                    </h2>
                    <div id={`collapse${data.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${data.id}`} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {
                                data.volumeInfo.hasOwnProperty('imageLinks') &&
                                <img src={data.volumeInfo.imageLinks.thumbnail} alt={`Couverture du livre : ${data.volumeInfo.title}`}/>
                            }
                            <br />
                            <h4 className="card-title mt-3">Titre :  {data.volumeInfo.title}</h4>
                            <h5 className="card-title mt-3">Auteurs : {data.volumeInfo.authors}</h5>
                            <p className="card-text mt-3">Description : {data.volumeInfo.description}</p>
                            <a 
                                className="btn btn-outline-secondary" 
                                target="blank" rel="noopener noreferrer" 
                                href={data.volumeInfo.previewLink}
                            >
                                Plus d'infos
                            </a>
                            <button 
                                className="btn btn-outline-secondary ms-3"
                                onClick={()=> handleSave(data.volumeInfo.title, data.volumeInfo.authors)}
                            >
                                Enregistrer
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            )
        })
       
    ) 

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Indiquez le sujet du livre à rechercher sur Google API</p>
                    <form className="d-flex flex-row align-items-center flex-wrap justify-content-center" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                               type="text" 
                               className="form-control" 
                               placeholder="Quoi rechercher ?"
                               required
                               value={title}
                               onChange={ e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group ms-3">
                            <button className="btn btn-outline-secondary ms-3">Rechercher</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container mt-5" style={{minHeight: '200px'}}>
                <div id="accordion" className="accordion">
                   {displayFetchedBooks}
                </div>
            </div>
        </main>
    )
}

export default SearchBooks