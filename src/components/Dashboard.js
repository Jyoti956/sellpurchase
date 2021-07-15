import React, { useState, useEffect } from 'react';
import apidata from '../api';
import Products from './Products'

export default function Dashboard() {

    const [search, setSearch] = useState("");
    const [user, setUser] = useState([])
    

    useEffect(() => {
        const localusers = JSON.parse(localStorage.getItem('newUsers'));
        if(localusers){
        const dashboarduser=localusers.find(user=>localusers[localusers.length-1])
        setUser(dashboarduser);
        console.log(dashboarduser, "dashboard user");
        }
    }, []);


    const handleSearch = (value) => {
        console.log(value);
        setSearch(value);
    }

    
    return (
        <div className="dashboard">

            <h2>Login as:{user.username}</h2>

            <div className="child4">
                <input
                    className="search"
                    type="text"
                    placeholder="&#61442;"
                    value={search}
                    onChange={({ target }) => handleSearch(target.value)} />
            </div>

            <div className="searchdiv">
                {apidata.map((product) => {
                    if (search.length !== 0) {
                        if (product.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                            return <Products key={product.id} product={product}/>
                    }
                    else {
                        return <Products key={product.id} product={product}/>
                    }
                }
                )}
            </div>
        </div>);
};

