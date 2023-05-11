import React from 'react';
import {Card,Typography,makeStyles,Box} from '@material-ui/core'
import pic from '../assets/pic.jpg'
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
}

})

const Post = () => {
    const classes=useStyle()
    return (
    <Card className={classes.container}>
        <Box className={classes.displayImage}>

        <img src={pic} className={classes.image}/>
        </Box>
        
        <Box className={classes.textBox}>
        <Typography>
            Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.  Hello this is a post.
        </Typography>
        </Box>


    </Card>
    );
};

export default Post;