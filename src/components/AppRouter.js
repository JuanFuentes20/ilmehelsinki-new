import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import NoPage from '../Pages/NoPage'
import OrderPage from '../Pages/OrderPage'
import { useState, useEffect } from 'react'
import data from '../db.json'

export default function AppRouter() {

  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setItems(items => data.data.items)
    setBlogs(blogs => data.data.blogs)

  }, [])

  return (
    <BrowserRouter basename='/ilmehelsinki-new'>
      <Routes>
        <Route exac path='/' element={<Home items={items} blogs={blogs} />} />
        <Route path="/tuote/:id" element={<OrderPage items={items} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

