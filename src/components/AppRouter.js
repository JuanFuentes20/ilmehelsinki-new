import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import NoPage from '../Pages/NoPage'
import OrderPage from '../Pages/OrderPage'
import { useState, useEffect } from 'react'

export default function AppRouter() {

  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then(response => response.json())
      .then((data) => {
        setItems(data.items)
        setBlogs(data.blogs)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home items={items} blogs={blogs}/>} />
        <Route path="/tuote/:id" element={<OrderPage items={items} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

