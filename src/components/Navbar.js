import {useNavigate} from 'react-router-dom'

export default function Navbar({scrollToSection, scroll}) {
    const navigate = useNavigate()
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
        displayMenu()
    };

    const displayMenu = () => {
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
                        displayMenu()
                    }}>Yhteystiedot</li>
                    </ul>
                </div>
                <div className="hamburger" onClick={displayMenu}>
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