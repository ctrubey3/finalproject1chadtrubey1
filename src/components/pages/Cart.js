import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {data} from "../../data";



const Cart = () => {
    const elements = data
    const defaultValues = {galaxy: 0, apple: 0, berry: 0, samsung: 0};
    const [values, setValues] = useState(defaultValues);
    const [stocks, setStocks] = useState(defaultValues);





    const handleSubmit = e => {
        e.preventDefault()

    }

    const itemTotal = (qty, price) => {
        return (qty * price);
    }

    const total = () => {
        return elements
            .map(element => itemTotal(values[element.name], element.price))
            .reduce((acc,v) => acc + v, 0)
            .toFixed(2);
    }

    const handleOnChange = e => {
        setValues({...values, [e.target.name]: e.target.value},
        setStocks({...stocks, [e.target.name]: e.target.stock},

        ) );
    }



    const containerStyle= {
        display: "block",
        height: "350px",
        width: "250px",
        marginLeft:"35%",

        backgroundColor: "green",
        padding: "10px",
        border: "1px solid #ccc",
        boxshadow: "0 0 10px #ccc",
        justifyContent: "center",

    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>Shopping Cart</h1>
            <div className="container">
                <ul>
                    {elements.map(item =>
                            <ul
                                className="col"
                                key={item.id}
                            >
                                <label
                                    id={item.id}
                                    htmlFor={item.id}
                                >
                     <span style={containerStyle}>
                         <img src={item.img} width="100" alt="item.img"/>
                         <h3>{item.label}</h3>
                         <h3>Price:{item.price}$</h3>
                         <h3>IN STOCK:{(values[item.name ] - item.stock)}</h3>
                    </span>
                                </label>
                                <input
                                    type="number"
                                    id={item.id}
                                    min="0"
                                    value={values[item.name]}
                                    name={item.name}
                                    onChange={handleOnChange}
                                    required
                                />
                                <span className="value">
                        ${(values[item.name] * item.price ).toFixed(2)}

                    </span>

                            </ul>
                    )}
                </ul>

                <div className="col-footer">
                    <span className="total">$ {total()}</span>
                   <button><span onClick={() => setValues(defaultValues)}>Clear</span></button>
                    <button><span onClick={() => alert("Items Purchased!!")}><Link to={"/"}><button>Purchase</button></Link></span></button>
                </div>
            </div>
        </form>
    )
}

export default Cart;
