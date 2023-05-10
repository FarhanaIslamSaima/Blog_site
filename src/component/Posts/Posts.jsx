import React from 'react';
import Post from './Post';
import { Grid } from '@material-ui/core';

const Posts = () => {
    return (
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
    );
};

export default Posts;