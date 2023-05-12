import React, { useState } from 'react';
import { useContext } from 'react';
import { LoginCheck } from '../../Context/LoginContext';
import { Box,Typography,InputBase,makeStyles,Button } from '@material-ui/core';
import {Route,useNavigate} from 'react-router-dom'
import { LoginAuth } from '../../Server/Authentication';
const useStyle=makeStyles(theme=>({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.up('lg')]:{
            margin:"138px 521px",

        },
        [theme.breakpoints.down('xs')]:{
            margin:"74px -2px",

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
  
    const init={
        email:'',
        password:''
    }
    const [log,setLog]=useState(init);
    let history=useNavigate();
    const {login,setLogin}=useContext(LoginCheck)
    const {refresh,setRefresh}=useContext(LoginCheck);
    const classes=useStyle();

    const handleLogin=async()=>{
        try{
            const response=await LoginAuth(log);
            console.log(response)

        }
        catch(error){
            alert(error.message);
        }
      
     
      
       
        


    }
    
    const createLogin=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
       console.log(e.target.value)

    }
    console.log(log.email);
    return (
        <Box className={classes.container}>
            <Typography>Login Form</Typography>
           <Box className={classes.center}>
           <InputBase placeholder={'Place your Email Address'} name="email" className={classes.textField} onChange={(e)=>createLogin(e)}></InputBase>
                <InputBase placeholder={'Place your Password'} name="password" className={classes.textField} onChange={(e)=>createLogin(e)}></InputBase>
                <Button color={'primary'} variant={'contained'} onClick={(e)=>handleLogin(e)}>Login</Button>

           </Box>
            
             
          

        </Box>
    );
};

export default Login;