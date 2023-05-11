import React, { useEffect, useState } from 'react';
import{AppBar,Toolbar,makeStyles,Box,Grid, Typography,Button} from '@material-ui/core'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import { LoginCheck } from '../../Context/LoginContext';
import { useContext } from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import { logoutAuth,firebaseObserver } from '../../Server/Authentication';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Server/App';
import { loginCheck } from '../../Server/AuthenticationStatus';
const useStyle=makeStyles({
    header:{
        background:'black',
        color:'white'
    },
    container:{
        
        width:'100%',
        display:'flex',
        justifyContent:'center'
        

    },
    leftContainer:{
        width:'20%',
        
        display:'flex',
            alignItems:'center',
       
        '&>*':{
            
            fontWeight:'bold',
        fontSize:'15px',
          

        }

    },
    rightContainer:{
        width:'20%',
        float:'right',
        color:'white',
        display:"flex",
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'center',
        
        '&>*':{
            padding:'5px',
            fontWeight:'bold',
        }


    },
    menu:{
        color:'white',
        textDecoration:"none",
        fontWeight:'bold'
    }

})

const Header = () => {
   
    const history=useNavigate();
const {login,setLogin}=useContext(LoginCheck)
   console.log(auth)    
  

   onAuthStateChanged(auth,(data)=>{
    if(data){
        
        history("/")
        setLogin(data.accessToken);
    }
    
   })


   


  
 
   
    //const data=loginCheck();
   
        
   
   

   
   

    const classes=useStyle();
  
    const handleLogout=async()=>{
        await logoutAuth();
        window.location.reload(true);
        

    }
    return (
      <AppBar>
        <Toolbar className={classes.header}>
            <Box className={classes.container}>
                <Grid container>
                    <Grid item lg={6} >
                 
                    </Grid>
            
               

           <Grid item lg={4}>
           <Box className={classes.rightContainer}>
            <Link to="/"><Typography className={classes.menu}>Home</Typography></Link>
           {login?<Button className={classes.menu} onClick={(e)=>handleLogout(e)}>Logout</Button>:<Link to="/login"><Typography className={classes.menu}>Login</Typography></Link>} 
            <Typography className={classes.menu}>AboutMe</Typography>
            
            {login?<Typography className={classes.menu}>AddPost</Typography>:""}
      

            
            
  

</Box>
           </Grid>
           


                </Grid>
            

            

        

            </Box>
       

        </Toolbar>
      </AppBar>
    );
};

export default Header;