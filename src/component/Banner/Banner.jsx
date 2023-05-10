import React from 'react';
import pic from '../assets/pic.jpg'
import {Box,Typography,makeStyles} from '@material-ui/core'
const useStyle=makeStyles({
    container:{
        backgroundImage:`url(${pic})`,
        height:'500px',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        '&>*':{
            fontSize:'35px'

        }


    },
    bigHead:{
        
        fontWeight:'bold',
        
    }
   
   

})


const Banner = () => {
    const classes=useStyle();
    return (
       <Box className={classes.container}>
        
            
                <Typography className={classes.bigHead}>Welcome!!!</Typography>
                <Typography className={classes.smallHead}>This is all about me!!</Typography>
            
        


       </Box>
    );
};

export default Banner;