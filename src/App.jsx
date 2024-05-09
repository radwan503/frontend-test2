import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [postList, setPostList] = useState([])
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    console.log(id)
    deleteItem(id)
  }

  const deleteItem = async (id) => {
    const resData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    const res = await resData.json();
    console.log(res);
  }


  useEffect(() => {
    const getData = async () => {
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const res = await resData.json();
      setPostList(res)
    }

    getData()

  }, [])

  return (
    <>
      <ul>
        {postList?.map((item) => (
          <li>{item.title} <button onClick={() => handleDelete(item.id)}>X</button></li>
        ))}
      </ul>
    </>
  )
}

export default App
