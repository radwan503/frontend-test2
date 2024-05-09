
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpdatePost from './components/UpdatePost';
import Header from './components/Header';
import AddPost from './components/AddPost';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </>
  )
}

export default App
