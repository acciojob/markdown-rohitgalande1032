import React, { useEffect, useState } from 'react'
import  "./styles.css";
import MarkdownEditor from './MarkdownEditor';

const App = () => {
    const [textarea, setTextarea] = useState("");
    
    useEffect(()=>{
        setTextarea(textarea);
    }, [textarea]);
  return (
    <div className='app'>
        <h1>Markdown Editor</h1>
        <MarkdownEditor textarea={textarea} />
    </div>
  )
}

export default App