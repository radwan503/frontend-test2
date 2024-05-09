import React, { useState, useEffect } from "react";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    console.log(id);
    deleteItem(id);
  }
  // delete data by id
  const deleteItem = async (id) => {
    try {
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      });

      if (resData.ok) {
        alert("Success,Important: resource will not be really delete on the server but it will be faked as if");
      } else {
        console.error("Error: Unable to delete item");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  //get data list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setPosts(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}------
            <a style={{ border: "1px solid #222", padding: "1px 8px", backgroundColor: "#f1f1f1", borderRadius: "3px" }} href={`/update/${post.id}`}>Edit</a>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetPosts;
