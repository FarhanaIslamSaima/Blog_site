import React from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';
import { useContext } from 'react';
import { LoginCheck } from '../../Context/LoginContext';
const Home = () => {
    const {login,setLogin}=useContext(LoginCheck);
     
    
  

    
    return (
        <>
        <Header/>
        
        <Banner/>
        <Posts/>
        
        </>
    );
};

export default Home;