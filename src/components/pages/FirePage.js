import React from 'react';
import fire from "../../Fire";
import {Link} from "react-router-dom";

function FirePage(){
    const [products, setProducts]=React.useState([]);
    const [submit]=React.useState(true);
    const ObjectInfo =fire


    const db = fire.firestore();




    React.useEffect(()=>{
        let newItems=[];

        db.collection("products").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    img: obj.img,
                    name:obj.name,
                    stock:obj.stock,
                    price:obj.price
                };

                console.log(obj);
                newItems.push(item);
            });

            setProducts(newItems)
        });
        console.log()



    },[db, submit]);







    const styleLink ={
        display:"block",
        height:"300px",
        width: "250px",
        margin:"5px",
        backgroundColor: "darkblue",
        padding: "10px",
        border: "1px solid #ccc",
        boxshadow: "0 0 10px #ccc",
        position: "center",
    }



    const ProductsEles = products.map((pro, idx)=>
        <Link to={`/UserInfo/${pro.id}`} style={styleLink} key={idx} >

            <img src={pro.img} width="100" alt="pro.img"/>
            <h1>Name:{pro.name}</h1>
            <h3>Stock:{pro.stock}</h3>
            <h3>Price:{pro.price}</h3>
        </Link>
    );

    return(
        <div>
            <h1>Store</h1>
            {ProductsEles}
        </div>
    )
}

export default FirePage