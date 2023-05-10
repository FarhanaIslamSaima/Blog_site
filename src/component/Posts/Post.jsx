import React from 'react';
import {Card,Typography,makeStyles} from '@material-ui/core'
import pic from '../assets/pic.jpg'
const useStyle=makeStyles({
container:{
    margin:'10px'
}
})

const Post = () => {
    const classes=useStyle()
    return (
    <Card className={classes.container}>
        <img src={pic}/>
        <Typography>
            Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.
        </Typography>


    </Card>
    );
};

export default Post;