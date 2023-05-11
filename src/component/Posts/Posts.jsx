import React from 'react';
import Post from './Post';
import { Grid,makeStyles,Box } from '@material-ui/core';
const useStyle=makeStyles({
    container:{
        margin:'20px'
    }
})

const Posts = () => {
    const classes=useStyle();
    return (
        <Box className={classes.container}>
 <Grid container>
    <Grid item lg={3}  xs={12}>
        <Post/>

    </Grid>
    <Grid item lg={3} xs={12}>
        <Post/>

    </Grid>
    <Grid item lg={3} xs={12}>
        <Post/>

    </Grid>
    <Grid item lg={3} xs={12}>
        <Post/>

    </Grid>

 </Grid>
 </Box>
    );
};

export default Posts;