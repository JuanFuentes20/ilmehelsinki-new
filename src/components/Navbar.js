export default function Navbar({scrollToSection}) {
    return (
        <div className="navbar">
            <h2>ILME</h2>
            <div className="navbar-links">
                <ul>
                    <li><a href={window.location} style={{ textDecoration: 'none', color: 'black'}}>Koti</a></li>
                    <li onClick={() => scrollToSection(".collection")}>Tuotteet</li>
                    <li onClick={() => scrollToSection(".about-us")}>Meistä</li>
                    <li onClick={() => scrollToSection(".contacts")}>Yhteystiedot</li>
                </ul>
            </div>
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}