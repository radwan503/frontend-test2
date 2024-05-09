import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdatePost = () => {
 const { id } = useParams();
 const [post, setPost] = useState({ title: "", body: "" });
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


 //update data by id
 const handleUpdate = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
   });
   if (!response.ok) {
    throw new Error("Failed to update post");
   }
   alert("Success: Item Update successfully,Important: resource will not be really updated on the server but it will be faked as if");
  } catch (error) {
   setError(error.message);
  } finally {
   setLoading(false);
  }
 };



 //get data by id for show in input
 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
     throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    setPost(jsonData);
   } catch (error) {
    setError(error.message);
   } finally {
    setLoading(false);
   }
  };
  fetchData();
 }, [id]);

 return (
  <div>

   <h2>Update Post - {post.title}</h2>
   <form onSubmit={handleUpdate}>
    <input
     type="text"
     placeholder="Title"
     value={post.title}
     onChange={(e) => setPost((prevPost) => ({ ...prevPost, title: e.target.value }))}
     required
    />
    <br />
    <br />
    <textarea
     placeholder="Body"
     rows={5}
     value={post.body}
     onChange={(e) => setPost((prevPost) => ({ ...prevPost, body: e.target.value }))}
     required
    ></textarea>
    <br />
    <br />
    <button type="submit" disabled={loading}>
     {loading ? "Updating..." : "Update Post"}
    </button>
    {error && <div>Error: {error}</div>}
   </form>
  </div>
 );
};

export default UpdatePost;
