import React from 'react';
import './Header.css'


const Header = () => {
    return (
        // top header 
        <div className="mb-4">
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        
                        <h2><a className="navbar-brand" href="/Dragon ball">Dragon Ball Manga Charecters</a></h2>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">

                                    <a className="nav-link active mx-3" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link active mx-3" aria-current="page" href="/charecter">All Charecters</a>
                                </li>

                            </ul>
                            <form className="d-flex flex-fill mx-5">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success bg-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {/* second heading  */}
            <div className="bg-secondary  p-3 text-white ">
                <h4>Create a perfect team to defeat the enemy</h4>
                <p>Fighters of the 7 universe are ready to save the universe and save menkind</p>
                <h5>Max Superpower Limite: 10000 </h5>
            </div>

        </div>



    );
};

export default Header;