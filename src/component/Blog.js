import { useState, useEffect } from "react";


export default function Blog() {
  
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit  (e)  {
       e.target.preventDefault();
    }

    return (
        <>
        <div style={{backgroundColor:'orange', width:'50%', height:'300px', padding:'10px', margin:'auto', borderRadius:'5px'}}>
           <form onSubmit={handleSubmit}>
            <label for='title'>Title<br/>
                <input id='title' type='text' placeholder="Enter the title here" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
            </label>
            <hr/>

            <label for='content'>Content<br/>
                <textarea id='content' placeholder="content goes here.." rows='6' cols='70' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </label><br/>
            <hr/>

            <button>Add</button>
           </form>

           
        </div>
        <h2>Blog:</h2>
        <h3>{title}</h3>
        <h3>{content}</h3>
        
        </>
    )
}