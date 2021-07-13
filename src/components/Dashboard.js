import React, { useState,useEffect} from 'react';
import apidata from '../api';



export default function Dashboard() {
    
    const [search, setSearch] = useState("");
    const[user,setUser]=useState([])
    const [isShowBuyButton,setIsShowBuyButton]=useState(true)

    useEffect(()=>{
        const users = JSON.parse(localStorage.getItem('newUsers'));
        if(users){
            setUser(users);
        }
        },[]);

    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }

    const handleHideButton = (product) =>{
        console.log(product);
        product.isShowBuyButton=false;
        console.log(product.isShowBuyButton);
        setIsShowBuyButton(product.isShowBuyButton)
        
    }

    return (
        <div className="dashboard">
            <h2>Login as:</h2>

            <div className="child4">
                <input
                    className="search"
                    type="text"
                    placeholder="&#61442;"
                    value={search}
                    onChange={handleSearch}/>
            </div>

            <div className="searchdiv">
                {apidata.map((product,index) => {
                    if (search.length !== 0){
                        if (product.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                            return <div id="pro" key={index}>
                                    <img className="small" src={product.src} alt={product.name} id="img" />
                                    <h3>{product.name}</h3>
                                    <h3>Rs.{product.price}</h3>
                                    {product.isShowBuyButton &&
                                    <div id={product.id}>
                                        <button className="addpro" onClick={(e) => {
                                            if (window.confirm("Do you really want to buy this item??")) {
                                                   handleHideButton(product)
                                            }
                                        }}>
                                            Buy Now
                                        </button>
                                    </div>}
                                    </div>
                        }
                        else{
                            return (
                                <>
                                <div id="pro" key={index}>
                                    <img className="small" src={product.src} alt={product.name} id="img" />
                                    <h3>{product.name}</h3>
                                    <h4>Rs.{product.price}</h4>
                                    {product.isShowBuyButton &&
                                    <div id={product.id}>
                                        <button className="addpro" onClick={(e) => {
                                            if (window.confirm("Do you really want to buy this item??")) {
                                                handleHideButton(product);
                                            }
                                        }}>
                                          Buy Now
                                        </button>
                                    </div>}
                                    </div>
                                </>
                            );
                        }
                    }
                )}
            </div>
        </div>);
};
                
