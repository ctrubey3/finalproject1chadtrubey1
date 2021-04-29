import React from "react";
import {Link} from "react-router-dom";
//import fire from "../../Fire";

function UserInfo(props){

  const objectInfo= [{id:0},
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLiZsF2Gv6MQfAplS-N6-n3lKnjTLmc-I-nNqW9ghozPdJ19IhGCL_awNm8iPTu6spLRYljBQ&usqp=CAc", name:"Galaxy S Max", stock:"25", price:650, id:1 },
      { img: "data:image/jpeg;base64,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", name:"Iphone", stock:"55", price:600, id:2 },
      { img: "https://i.pinimg.com/originals/99/4a/31/994a31a081fee36d974de9ab0362f6bb.jpg", name:"Black Berry", stock:"1", price:600, id:3 },
      { img: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S21-Ultra-5G/Phantom-Black/Samsung-Galaxy-S21-Ultra-5G-Phantom-Black-frontimage.png", name:"Android", stock:"5", price:200, id:4 },

  ]
   let id = props.match.params.id;
   let name = objectInfo[id].name;
   let price =objectInfo[id].price;
   let stock = objectInfo[id].stock;
   let img = objectInfo[id].img;




    const styleLink ={
        height: "350px",
        width: "250px",
        margin: "5px",
        marginTop:"30px",
        marginLeft: "45%",
        backgroundColor: "darkblue",
        border: "1px solid #ccc",
        boxshadow: "0 0 10px #ccc",
        justifyContent: "center",
        padding: "10px",

    }

    const buttonStyle={
        width:"100%",
        backgroundColor: "midnightblue",
        color: "white",
        padding:"10px",
        height: "35px",
    }


    return(
        <div style={buttonStyle}><Link to={"/"}>Go Back</Link>
           <div className="App"  style={styleLink} key={id} >
            <buttton>
                <img src={img} width="100"  height="100" alt="item.img"/>
                <h5>Name:{name}</h5>
                <h5>Stock:{stock}</h5>
                <h5>Price:{price}</h5>
                <h5>id:{id}</h5>
            </buttton>
            </div>
        </div>
    )}

export default UserInfo;
