import React, { useState } from 'react';
import {Box,makeStyles,InputBase, FormControl, Typography,Button,TextareaAutosize} from '@material-ui/core'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TextEditor from './TextEditor';
import pic from '../assets/pic.jpg'
import Header from '../Header/Header';
import { useContext } from 'react';
import { TextProvider } from '../../Context/TextContext';
import { handleElement } from '../../Server/AddElement';


import { useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
const functionHandle=()=>{
    
}
const useStyle=makeStyles({
    container:{
        margin:'10px',
        '&>*':{
            margin:"10px"
        }
    

    },
    text:{
        width:'500px',
        height:"500px",
        border:'none',
        fontSize:'20px',
        '&:focus-visible':{
            outline:'none'
        }

    },
    file:{
        display:'none'
    },
    displayImage:{
        width:'100%',
      
    },
    image:{
        width:"100%",
        height:'400px'
    },
  textField:{
    borderBottom:'2px solid black',
    marginBottom:'5px'

  },
icon:{
    fontSize:'40px'
},
header:{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    fontSize:"20px",
    fontWeight:"bold",
    marginBottom:"2px solid black"
},
buttons:{
    display:"flex",
    margin:'5px',
    "&>*":{
        margin:"20px"
    }
}
})

const Addpost=()=>{
    const {text,setText}=useContext(TextProvider);
    const editor = useRef(null);
	const [content, setContent] = useState('');
    setText(content);
   
    
    const classes=useStyle();
    const init={
        Category:'',
        title:'',
        description:''
    }
    console.log(text);
    const [post,setPost]=useState(init);
   
    const handlePost=async(e)=>{
        setPost({...post,[e.target.name]:e.target.value,});
        
        


    }
    const history=useNavigate();
    const handleSubmit=async(e)=>{
        try{
           handleElement(post);
        
           
          
        
      
            

        }
        catch(error){
            console.log(error)
        }
        

    }
    console.log(post)
    return (
        <>
        
      
        <Box className={classes.container}>
            <Typography className={classes.header}>Create Your Blog Post here</Typography>
            <Box className={classes.displayImage}>
            <img src={pic} className={classes.image}/>

            </Box>
            <FormControl>
            <label htmlFor='button'>
            <ControlPointIcon className={classes.icon}> </ControlPointIcon>

            </label>
           
            <input type="file" id="button"className={classes.file}></input>
            <InputBase placeholder={'Your Post Title will go here'} className={classes.textField} name="title"onChange={(e)=>handlePost(e)}></InputBase>
            <InputBase placeholder={'Your post category will go here'} className={classes.textField} name="Category" onChange={(e)=>handlePost(e)}></InputBase>
            <TextareaAutosize className={classes.text}name="description" placeholder="Tell Your Story here..."   onChange={(e)=>handlePost(e)}  style={{height:"184px"}}      ></TextareaAutosize>
<Box className={classes.buttons}>
    <Button color={'primary'} variant={'contained'} >Back</Button>
    <Button color={'primary'} variant={'contained'} onClick={(e)=>handleSubmit(e)}>Post</Button>
</Box>

            </FormControl>
        
           
            


        </Box>
        </>
    );
};

export default Addpost;