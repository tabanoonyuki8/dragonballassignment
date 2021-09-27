import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Charecter from '../Charecter/Charecter';


const Panel = () => {


    const [charecters, setCharecters] = useState([]);

    // set cartstate
    const [cart, setCart] = useState([])

    // handle button 

    const handleAddCharecter = (charecter) => {
        const newCart = [...cart, charecter]
        setCart(newCart);
    }

    //  data fetch from fakeData
    useEffect(() => {
        fetch('/characters.JSON')
            .then(res => res.json())
            .then(data => setCharecters(data))
    }, [])

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-9">
                    <div className=" row row-cols-1 row-cols-md-3 g-4">
                        {
                            charecters.map(charecter => <Charecter
                                key={charecter.id}
                                charecter={charecter}
                                handleAddCharecter={handleAddCharecter}
                            ></Charecter>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card mb-3" style={{ width: '300px' }}>
                        <Cart
                            cart={cart}

                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;