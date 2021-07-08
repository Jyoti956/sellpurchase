import React, { useState } from 'react';
import data from '../api'


function Dashboard() {

    const [search, setSearch] = useState("");
    const [showButton, setShowButton] = useState(true)

    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }

    const handleRemoveButton = (product) => {
        console.log(data);
        const items=data.find((item)=>item.id===data.id);
        for(let i=0; i<=data.length; i++){
            if(items.id===data.id){
                setShowButton(false)
            }
        }
        
        
    }

    const buybtn = () => {

        return (
            <div>
                <button className="addpro" onClick={(e) => {
                    if (window.confirm("Do you really want to buy this item??")) {
                        handleRemoveButton()
                    }
                }}>
                    Buy Now
                </button>
            </div>
        );

    }

    


    return (
        <div className="dashboard">
            <div>
                <h2>Login as:Username</h2>
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
                {data.map((product) => {
                    if (search.length !== 0) {
                        if (product.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                            return <div id="pro">
                                <img className="small" src={product.src} alt={product.name} id="img" />
                                <h3>{product.name}</h3>
                                <h3>Rs.{product.price}</h3>
                                {showButton ? buybtn() : null}
                                
                            </div>
                    }
                    else {
                        return (
                            <>
                                <div id="pro">
                                    <img className="small" src={product.src} alt={product.name} id="img" />
                                    <h3>{product.name}</h3>
                                    <div>
                                        <p>{product.qty}</p>
                                        <h4>Rs.{product.price}</h4>
                                    </div>
                                    {showButton ? buybtn() : null}
                                    
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

export default Dashboard;