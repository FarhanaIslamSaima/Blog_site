import { firebaseConfig } from "./Config";
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { firebaseObserver } from "./Authentication";
export const loginCheck=async()=>{
    var datas;
    const app=initializeApp(firebaseConfig);
    const auth=getAuth(app);
    await onAuthStateChanged(auth,(data)=>{
        console.log(data)
        datas=data;

        
    })
    return datas;

}
