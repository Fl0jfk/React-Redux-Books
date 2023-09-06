import { useState } from "react";
import { connect } from 'react-redux';
import { addBook } from "../redux/actions/actionAddBooks";

function AddBooks({ libraryData, addBook }){
    const initialState = {
        title: '',
        author:''
    }
    const [newData, setNewData] = useState(initialState);
    const handleSubmit = e => {
        e.preventDefault();
        addBook(newData);
        //Vider le input
        setNewData(initialState);
    }
    const displayData = libraryData.length > 0 ?
            libraryData.map(data => {
                return (
                    <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
                        <span><strong>Auteur: </strong>{data.author}</span>
                        <span><strong>Titre: </strong>{data.title}</span>
                    </li>
                )
            }) 
        : <p className="text-center">Aucun livre à afficher</p>
    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>
                    <form className="d-flex flex-row align-items-center flex-wrap justify-content-center gap-3" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                value={newData.title}
                                type="text" 
                                className="form-control" 
                                placeholder="Titre" 
                                required
                                onChange={e => setNewData({...newData, title: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                value={newData.author}
                                type="text" 
                                className="form-control" 
                                placeholder="Auteur" 
                                required
                                onChange={e => setNewData({...newData, author: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                          <button className="btn btn-outline-secondary">Ajouter un livre</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="container mt-5" style={{minHeight: '200px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {displayData}
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger mt-4 mb-5">Effacer tous les livres</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const addStateToProps = state => {
    return {
        libraryData: state.library
    }
}

const addDispatchToProps = (dispatch) => {
    return {
        addBook: param => dispatch(addBook(param))
    }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks);