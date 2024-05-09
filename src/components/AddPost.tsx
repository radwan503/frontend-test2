import React, { useState } from "react";



const AddPost = () => {
 const [newPost, setNewPost] = useState({ title: "", body: "" });
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
   });
   if (!response.ok) {
    throw new Error("Failed to create post");
   }
   setNewPost({ title: "", body: "" });
   alert("Success: Item Add successfully,Important: resource will not be really updated on the server but it will be faked as if");
  } catch (error) {
   setError(error.message);
  } finally {
   setLoading(false);
  }
 };

 return (
  <div>
   <h2>Add Post</h2>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     placeholder="Title"
     value={newPost.title}
     required
     onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
    />
    <br />
    <br />
    <textarea
     required
     placeholder="Body"
     value={newPost.body}
     onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
    ></textarea>
    <br />
    <br />
    <button type="submit" disabled={loading}>
     {loading ? "Adding..." : "Add Post"}
    </button>
    {error && <div>Error: {error}</div>}
   </form>
  </div>
 );
};

export default AddPost;
