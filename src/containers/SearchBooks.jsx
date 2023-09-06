import { useState } from "react"

function SearchBooks () {
    /* https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20 */
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

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
                <div className="accordion">
                    <div className="card mb-2">
                            <div className="card-header">
             
                            </div>
                            <div className="collapse" data-parent="accordion">
                                <div className="card-body">
                                    {
                                        /*
                                        -img
                                        -title
                                        
                                        author
                                        des
                                        */
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SearchBooks