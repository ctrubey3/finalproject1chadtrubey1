import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {data} from "../../data";

function FirePage(){
    const elements =data



    const defaultValues = {galaxy: 0, apple: 0, berry: 0, samsung: 0};
    const [values, setValues] = useState(defaultValues);
    const [stocks, setStocks] = useState(defaultValues);
    const handleSubmit = e => {
        e.preventDefault()

    }
    const total = () => {
        return elements
            .map(element => itemTotal(values[element.name], element.price))
            .reduce((acc,v) => acc + v, 0)
            .toFixed(2);
    }

    const itemTotal = (qty, price) => {
        return (qty * price);
    }
    const handleOnChange = e => {
        setValues({...values, [e.target.name]: e.target.value},
            setStocks({...stocks, [e.target.name]: e.target.stock},

            ) );
    }

    const styleLink = {
        display: "block",
        height: "350px",
        width: "250px",
        backgroundColor: "darkblue",
        padding: "10px",
        border: "1px solid #ccc",
        boxshadow: "0 0 10px #ccc",
        position: "center",

        marginLeft: "40%",

    }


    let Links = elements.map((item) =>
        <div>
            <Link to={`/UserInfo/${item.id}`} style={styleLink} key={item.id}>

                <img src={item.img} width="100" alt="item.img"/>
                <h1>Name:{item.name}</h1>
                <h3>IN STOCK:{(values[item.name ] - item.stock)}</h3>
                <h3>Price:{item.price}</h3>
            </Link>
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
        </div>
    );

    return (
        <form onSubmit={handleSubmit}>





                <div className="col-footer">
                    {Links}
                    <span className="total">$ {total()}</span>
                    <button><span onClick={() => setValues(defaultValues)}>Clear</span></button>
                </div>

        </form>
    )
}


export default FirePage;
