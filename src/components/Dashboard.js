import React, { useState, useEffect } from 'react';
import apidata from '../api'


export default function Dashboard() {

    const [search, setSearch] = useState("");
    const [hide, setHide] = useState(false);
    
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user'));
        console.log(user);
    },[]);

    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }

    const handleRemoveButton = (product) => {
        console.log(apidata);
        const items = apidata.find((item) => item.id === product.id);
        if(items){
            setHide(true)
        }
        
        
        }
    
    

    return (
        <div className="dashboard">
            <div>
                <h2>Login as:</h2>
            </div>
            <div className="child4">
                <input
                    className="search"
                    type="text"
                    placeholder="&#61442;"
                    value={search}
                    onChange={handleSearch} />
            </div>

            <div className="searchdiv">
                {apidata.map((product) => {
                    if (search.length !== 0) {
                        if (product.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                            return <div id="pro">
                                <img className="small" src={product.src} alt={product.name} id="img" />
                                <h3>{product.name}</h3>
                                <h3>Rs.{product.price}</h3>
                                {!hide &&
                                <div id={product.id}>
                                    <button className="addpro" onClick={(e) => {
                                        if (window.confirm("Do you really want to buy this item??")) {
                                            handleRemoveButton(product)
                                        }
                                    }}>
                                        Buy Now
                                    </button>
                                </div>}
                            </div>
                    }
                    else {
                        return (
                            <>
                                <div id="pro">
                                    <img className="small" src={product.src} alt={product.name} id="img" />
                                    <h3>{product.name}</h3>
                                    <h4>Rs.{product.price}</h4>
                                    {!hide &&
                                    <div id={product.id}>
                                    <button  className="addpro" onClick={(e) => {
                                            if (window.confirm("Do you really want to buy this item??")) {
                                                handleRemoveButton(product)
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

        </div>
    );
}

