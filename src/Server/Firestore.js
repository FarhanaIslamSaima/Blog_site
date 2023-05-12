import {initializeApp} from 'firebase/app'

import {getFirestore} from 'firebase/firestore'




export const getDb=()=>{
    let db=false;
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyDPI_y_da_POJRc7TSna-0x68fwR3-WU5k",
            authDomain: "blog-site-507dd.firebaseapp.com",
            projectId: "blog-site-507dd",
            storageBucket: "blog-site-507dd.appspot.com",
            messagingSenderId: "688159047267",
            appId: "1:688159047267:web:5b2e4b50200e7e84410256"
          };
        const app=initializeApp(firebaseConfig);
        db=getFirestore(app);
        

    }
    return db;
   

}