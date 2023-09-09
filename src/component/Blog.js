import { useState, useRef, useEffect} from "react";
import {db} from '../firebaseInit';
import { collection, addDoc } from "firebase/firestore"; 





export default function Blog() {

    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [blogs, setBlogs] = useState([]);
    
    const titleRef = useRef(null);


    useEffect(() => {
        titleRef.current.focus();
    }, []);

    useEffect(() => {
        if (blogs.length && blogs[0].title) {
            document.title = blogs[0].title;
        } else {
            document.title = 'No blogs';
        }
    }, [blogs])



    async function handleSubmit(e) {
        e.preventDefault()
        setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        // Add a new document with a generated id.
       const docRef = await addDoc(collection(db, "Blogs"), {
       title: formData.title,
        content: formData.content,
        createdOn:new Date()
       });
    //    console.log("Document written with ID: ", docRef.id);
        
        titleRef.current.focus();
        setFormData({ title: "", content: "" });

    }

    function handleDelete(i) {
        setBlogs(blogs.filter((blog, index) => index !== i));
       
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Title<br />
                        <input id='title' type='text' placeholder="Enter the title here" value={formData.title} ref={titleRef} onChange={(e) => setFormData({ title: e.target.value, content: formData.content })} /><br />
                    </label>
                    <hr />

                    <label>Content<br />
                        <textarea id='content' placeholder="content goes here.." rows='6' cols='70' value={formData.content} required onChange={(e) => setFormData({ title: formData.title, content: e.target.value })}></textarea>
                    </label><br />
                    <hr />

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