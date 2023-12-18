import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from './AboutUs'
import Navbar from './Navbar'
import Footer from './Footer'
import NoPage from '../Pages/NoPage'
import OrderPage from '../Pages/OrderPage'
import { useState, useEffect } from 'react'
import data from '../db.json'

const scrollToSection = (classname) => {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".hamburger-navbar-links")
  const mobileMenuHeight = mobileMenu.offsetHeight
  const element = document.querySelector(classname);
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const navbarHeight = navbar.offsetHeight;
  let scrollPosition = elementPosition - navbarHeight;

  if(mobileMenu.classList.contains("active")){
    scrollPosition -= mobileMenuHeight
  }

  if(element){
    element.style.transition = "scroll 3s ease-in-out"
      window.scrollTo({
          top: scrollPosition,
          behavior: "smooth"
      })

      setTimeout(() => {
        element.style.transition = "unset";
      }, 3000)
  }
}

export default function AppRouter() {

  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])
  const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setItems(items => data.data.items)
    setBlogs(blogs => data.data.blogs)

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])
  return (
    <BrowserRouter basename='/ilmehelsinki-new'>
      <Navbar scrollToSection={scrollToSection} scroll={scroll}/>
      <Routes>
        <Route exact path='/' element={<Home items={items} blogs={blogs} scroll={scroll}/>} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/tuote/:id" element={<OrderPage items={items} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

