import React from 'react';
import { useContext } from 'react';
import { LoginCheck } from '../../Context/LoginContext';
import { Box,Typography,InputBase,makeStyles,Button } from '@material-ui/core';
import {Route,useNavigate} from 'react-router-dom'
const useStyle=makeStyles(theme=>({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.up('lg')]:{
            margin:"59px 521px",

        },
         
        background:"black",
       height:'500px',
       width:'500px',
       '&>*':{
        fontWeight:"bold",
        color:"white",
        fontSize:'27px'
       }
    },
    center:{
        display:"flex",
        flexDirection:'column',
        '&>*':{
            color:'white',
            padding:'10px',
            margin:'20px'
        },
        
        
        
    },
    textField:{
        borderBottom:'2px solid white',
        width:'100%'
    }

}))

const Login = () => {
    let history=useNavigate();
    const {login,setLogin}=useContext(LoginCheck)
    const classes=useStyle();
    const handleLogin=()=>{
        setLogin(true);
        
        history("/");
        


    }
    return (
        <Box className={classes.container}>
            <Typography>Login Form</Typography>
           <Box className={classes.center}>
           <InputBase placeholder={'Place your Email Address'} className={classes.textField}></InputBase>
                <InputBase placeholder={'Place your Password'} className={classes.textField}></InputBase>
                <Button color={'primary'} variant={'contained'} onClick={(e)=>handleLogin(e)}>Login</Button>

           </Box>
            
             
          

        </Box>
    );
};

export default Login;