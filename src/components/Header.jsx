import React from 'react'

const Header = () => {
 return (
  <div style={{ border: "1px solid #ddd", width: "100%", backgroundColor: "#ddd" }}>
   <ul style={{ display: "flex", gap: "30px" }}>
    <li> <a style={{ fontSize: "20px" }} href="/">HOME</a></li>
    <li> <a style={{ fontSize: "20px" }} href="/addpost">Add Post</a></li>
   </ul>
  </div>
 )
}

export default Header
