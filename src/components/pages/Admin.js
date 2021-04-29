import React from 'react';
import fire from "../../Fire";


function Admin(){
    const [products, setProducts]=React.useState([]);
    const [submit,setSubmit]=React.useState(true)

    const [form,setForm]=React.useState({
        name:"",
        number:"",

    })
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





    const handleChange= prop => event =>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    };

    const handleSubmit = ()=> {
        db.collection("products").add(form).then(() => {
            setForm({
                name: "",
                stock: "",
                price: ""
            });
            setSubmit(!submit)
        });
    }




    const handleDelete=(id)=>{
        db.collection("products").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }
    const styleLink ={
        display:"block",
        height:"350px",
        width: "250px",
        marginLeft:"39%",
        backgroundColor: "darkblue",
        padding: "10px",
        border: "1px solid #ccc",
        boxshadow: "0 0 10px #ccc",
    }


    const ProductsEles = products.map((pro, idx)=>
        <div style={styleLink} key={idx} onClick={()=>handleDelete(pro.id)}>
            <img src={pro.img} width="100" alt="pro.img"/>
            <h1>Name:{pro.name}</h1>
            <h3>Stock:{pro.stock}</h3>
            <h3>Price:{pro.price}</h3>
            <button><div key={idx} onClick={()=>handleDelete(pro.id)}>Delete</div></button>
        </div>
    );




    return(
        <div>
            <h1>Admin Page</h1>
            {ProductsEles}

            <input type="text" placeholder={"Image..."} onChange={handleChange("Image")}/>

            <input type="text"
                   placeholder={"Name..."}
                   onClick={() => alert("Name must be longer than 2 characters")}
                   onChange={handleChange("name")}/>



            <input type="text" placeholder={"Stock..."} onChange={handleChange("stock")}/>
            <input type="text" placeholder={"Price..."} onChange={handleChange("price")}/>


            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default Admin;
