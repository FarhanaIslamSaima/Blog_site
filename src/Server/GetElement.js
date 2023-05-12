import {initializeApp} from 'firebase/app'
import { getDocs,collection } from 'firebase/firestore'
import { getDb } from './Firestore'
import { firebaseConfig } from './Config'

export const Getelement=async()=>{
const ref=collection(getDb(),'Post');
var res=[]
    const doc_refs=await getDocs(ref);
    doc_refs.forEach(post => {
        res.push(
            {
                id:post.id,
                ...post.data()
            }
        )
        
    });



return res;




}