import React from 'react';
import{AppBar,Toolbar,makeStyles,Box,Grid, Typography} from '@material-ui/core'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LoginCheck } from '../../Context/LoginContext';
import { useContext } from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
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
    const {login}=useContext(LoginCheck)
    const classes=useStyle();
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
           {login?<Typography className={classes.menu}>Logout</Typography>:<Link to="/login"><Typography className={classes.menu}>Login</Typography></Link>} 
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