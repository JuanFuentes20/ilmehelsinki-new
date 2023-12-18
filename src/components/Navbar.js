import {useNavigate} from 'react-router-dom'

export default function Navbar({scrollToSection, scroll}) {
    const navigate = useNavigate()

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
                        <li><a href={window.location} style={{ textDecoration: 'none', color: 'white'}}>Koti</a></li>
                        <li onClick={() => scrollToSection(".collection")}>Tuotteet</li>
                        <li onClick={() => navigate("/about-us")}>Meistä</li>
                        <li onClick={() => scrollToSection(".contacts")}>Yhteystiedot</li>
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
                    <li><a href={window.location} style={{ textDecoration: 'none', color: 'white'}}>Koti</a></li>
                    <li onClick={() => scrollToSection(".collection")}>Tuotteet</li>
                    <li onClick={() => navigate("/about-us")}>Meistä</li>
                    <li onClick={() => scrollToSection(".contacts")}>Yhteystiedot</li>
                </ul>
            </div>
        </div>
    )
}