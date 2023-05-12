import { getDb } from "./Firestore";
import { addDoc,collection } from "firebase/firestore";
export const handleElement=(post)=>{
    console.log(post)
    const ref=collection(getDb(),'Post');
    
    console.log(getDb());
    try{
        addDoc(ref,{
            Category:post.Category,
            Title:post.title,
            description:post.description

        })
    }
catch(error){
    console.log(error)
}

}