import {initializeApp} from "firebase/app";
import { useContext } from "react";
import { LoginCheck } from "../Context/LoginContext";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { firebaseConfig } from "./Config";
import ReactObserver from 'react-event-observer'
import { loggedIn } from "./AuthenticationStatus";
export const firebaseObserver=ReactObserver();

var auth;
export const LoginAuth=async(data)=>{
    
    try{
        
        const app=initializeApp(firebaseConfig);
        auth=getAuth(app);
       const datas= await signInWithEmailAndPassword(auth,data.email,data.password);
    
       return datas;
        

    }
    catch(err){
        console.log(err);
        alert(err.message);
    }

}


export const logoutAuth=async()=>{
    
       
        const app=initializeApp(firebaseConfig);
        const auth=getAuth(app);
       await signOut(auth);
      
    
        

    
   

}