import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
export const LoginAuth=async(data)=>{
    try{
        const firebaseConfig = {
            apiKey: "AIzaSyDPI_y_da_POJRc7TSna-0x68fwR3-WU5k",
            authDomain: "blog-site-507dd.firebaseapp.com",
            projectId: "blog-site-507dd",
            storageBucket: "blog-site-507dd.appspot.com",
            messagingSenderId: "688159047267",
            appId: "1:688159047267:web:5b2e4b50200e7e84410256"
          };
        const app=initializeApp(firebaseConfig);
        const auth=getAuth(app);
       const datas= await signInWithEmailAndPassword(auth,data.email,data.password);
       console.log(datas)
        

    }
    catch(err){
        console.log(err);
    }

}