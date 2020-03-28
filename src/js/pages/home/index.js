import React, { useState, useEffect } from 'react';
import Header from '../../components/header/index'
import api from '../../../services/api';

function Home(){
    
    var loadBooks = () => {
        const url = "?q=flowers&key=AIzaSyCY5qNAeB5X5j_4GrgNCF5qfB-431zfVS0";
        api.get(url)
            .then((response) => {
                console.log(response)
            })
    }

    useEffect(() => {
        loadBooks();
    }, [])

    return(
            <Header />  
    )
}

export default Home