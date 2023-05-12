import React, { useState, useRef, useMemo,useContext } from 'react';
import JoditEditor from 'jodit-react';
import { TextProvider } from '../../Context/TextContext';

const TextEditor = () => {
    const {text,setText}=useContext(TextProvider);
    const editor = useRef(null);
	const [content, setContent] = useState('');
    setText(content);


    return (
        <JoditEditor
        ref={editor}
        value={content}
       
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
    />
    );
};

export default TextEditor;