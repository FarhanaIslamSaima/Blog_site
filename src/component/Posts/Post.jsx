import React, { useEffect, useState } from 'react';
import {Card,Typography,makeStyles,Box} from '@material-ui/core'
import pic from '../assets/pic.jpg'
import { Getelement } from '../../Server/GetElement';
const useStyle=makeStyles({
container:{
    margin:'10px',
    padding:'5px',
   
},
image:{
    heigth:"100px",
    width:'100%'
   
},
textBox:{
    padding:"5px"

},
displayImage:{
    height:"50x"
},
cat:{
    fontWeight:'bold',
    fontSize:"12px",
    color:'grey'
},
title:{
    color:'black',
    fontWeight:'bold',
    fontSize:'20px'

}

})

const Post = ({data}) => {
 
    
    const classes=useStyle()
    return (
    <Card className={classes.container}>
        <Box className={classes.displayImage}>

        <img src={pic} className={classes.image}/>
        </Box>
        
        <Box className={classes.textBox}>
        <Typography className={classes.cat}>
           {data.Category}
        </Typography>
        <Typography className={classes.title}>
           {data.Title}
        </Typography>
        
        </Box>


    </Card>
    );
};

export default Post;