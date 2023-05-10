import React from 'react';
import{AppBar,Toolbar,makeStyles,Box,Grid, Typography} from '@material-ui/core'
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


    }

})

const Header = () => {
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
    <Typography>Home</Typography>
    <Typography>MyBlogs</Typography>
    <Typography>About</Typography>
    <Typography>Login</Typography>

</Box>
           </Grid>
           


                </Grid>
            

            

        

            </Box>
       

        </Toolbar>
      </AppBar>
    );
};

export default Header;