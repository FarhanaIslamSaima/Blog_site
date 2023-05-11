import { initializeApp } from "firebase/app"
import { Config } from "firebase/auth"
import { firebaseConfig } from "./Config"
import { getAuth } from "firebase/auth"




 
    const apps=initializeApp(firebaseConfig);
    export const auth=getAuth(apps);
    

