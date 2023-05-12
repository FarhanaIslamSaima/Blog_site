import React from 'react';
import Post from './Post';
import { Grid,makeStyles,Box } from '@material-ui/core';
import { Getelement } from '../../Server/GetElement';
import { useEffect } from 'react';
import { useState } from 'react';
const useStyle=makeStyles({
    container:{
        margin:'20px'
    }
})

const Posts = () => {
    const classes=useStyle();
    const [post,setPost]=useState([]);

    useEffect(()=>{
        const getPost=async()=>{
             let data=await Getelement();
             setPost(data);

        }
        getPost();

    },[])
    console.log(post)
    return (
        <Box className={classes.container}>
 <Grid container>
    {
        post.map(data=>(
            <Grid item lg={3}  xs={12}>
        <Post data={data}/>

    </Grid>



        ))
    }
    
   

 </Grid>
 </Box>
    );
};

export default Posts;