import { useState} from "react";


export default function Blog() {
  
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [formData, setFormData] = useState({title:'', content:''});
    const [blogs, setBlogs] = useState([]);

    function handleSubmit (e)  {
       e.preventDefault()
       setBlogs([{title:formData.title, content:formData.content}, ...blogs]);
       console.log(blogs);
       setFormData({title:"", content:""});

    }

    function handleDelete(i) {
       setBlogs(blogs.filter((blog, index) => index !== i));
    }

    return (
        <>
        <div style={{backgroundColor:'orange', width:'50%', height:'300px', padding:'10px', margin:'auto', borderRadius:'5px'}}>
           <form onSubmit={handleSubmit}>
            <label>Title<br/>
                <input id='title' type='text' placeholder="Enter the title here" value={formData.title} onChange={(e) => setFormData({title:e.target.value, content:formData.content})}/><br/>
            </label>
            <hr/>

            <label>Content<br/>
                <textarea id='content' placeholder="content goes here.." rows='6' cols='70' value={formData.content} onChange={(e) => setFormData({title:formData.title, content:e.target.value})}></textarea>
            </label><br/>
            <hr/>

            <button>Add</button>
           </form>

           
        </div>
        <h2>Blog:</h2>
        {blogs.map((blog, i) => {
            return (
                <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            )
        })}
        
        
        </>
    )
}