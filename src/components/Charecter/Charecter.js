import React from 'react';
import './Charecter.css'

const Charecter = (props) => {

    const { name, manganame, height, img, value, gender } = props.charecter || {};
    return (
        <div>

            <div className="col shadow-lg ">
                <div className="card h-100">
                    <img src={img} className="card-img-top charecter-img mx-auto p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-title"> <span className="fw-bold">Manga Name: </span>{manganame}</p>
                        <p className="card-title"><span className="fw-bold">Height: </span>{height}</p>
                        <p className="card-title"><span className="fw-bold">Gender: </span>{gender}</p>
                        <p className="card-title"><span className="fw-bold">Superpower limit: </span>{value}</p>

                    </div>
                    <div className="p-3">
                        <button className="btn btn-success" onClick={() => props.handleAddCharecter(props.charecter)}> <i className="fas fa-shopping-cart"></i> Add to team</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Charecter;