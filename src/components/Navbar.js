import {useNavigate, useLocation } from 'react-router-dom'


export default function Navbar({scrollToSection, scroll}) {
    const navigate = useNavigate()
    const location = useLocation();
    const path = location.pathname;

    const orderPage = path.includes("/collection/") ;

    const navbar = document.querySelector(".navbar")
    if( orderPage && navbar){
      navbar.style.color = "black"
      const hamburgerSpans = document.querySelectorAll(".hamburger span")
      hamburgerSpans.forEach(hamburgerSpan => hamburgerSpan.style.backgroundColor = "black")
      
    } else if(!orderPage && navbar) {
        navbar.style.color = "white"
        const hamburgerSpans = document.querySelectorAll(".hamburger span")
        hamburgerSpans.forEach(hamburgerSpan => hamburgerSpan.style.backgroundColor = "white")
    }

    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
        const contentWidth = document.documentElement.clientWidth;
        if(contentWidth < 1024) {
            displayMenu()
        }
    };

    

    const displayMenu = () => {
        const navbar = document.querySelector(".navbar")
        const hamburgerSpan = document.querySelector(".hamburger span")
        navbar.classList.toggle("active")
        hamburgerSpan.classList.toggle("active")
        const menu = document.querySelector(".hamburger-navbar-links")
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        menu.classList.toggle("active")
    }

    return (
        <div className="navbar-container">
            <div className={scroll ? "navbar scrolled" : "navbar"}>
                <h2>ILME</h2>
                <div className="navbar-links">
                    <ul>
                        <li onClick={() => navigateTo("/")}>Koti</li>
                        <li onClick={() => navigateTo("/collection")}>Tuotteet</li>
                        <li onClick={() => navigateTo("/about-us")}>Meistä</li>
                        <li onClick={() => {
                        scrollToSection(".contacts")
                    }}>Yhteystiedot</li>
                    </ul>
                </div>
                <div className="hamburger" onClick={() => displayMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="hamburger-navbar-links">
                <ul>
                    <li onClick={() => navigateTo("/")}>Koti</li>
                    <li onClick={() => navigateTo("/collection")}>Tuotteet</li>
                    <li onClick={() => navigateTo("/about-us")}>Meistä</li>
                    <li onClick={() => {
                        scrollToSection(".contacts")
                        displayMenu()
                    }}>Yhteystiedot</li>
                </ul>
            </div>
        </div>
    )
}