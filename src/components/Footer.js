import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();
    const path = location.pathname;

    const isAboutUs = path === '/about-us' || path.includes("/collection/") ;
    const backgroundColor = isAboutUs ? 'white' : '#f1f1ef';

    return (
        <footer style={{ backgroundColor: backgroundColor }}>
            <div className="top">
                <h2>ILME</h2>
                <div className="back-to-start" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <p>TAKAISIN ALKUUN</p>
                    <i className="material-symbols-outlined">arrow_upward</i>
                </div>
            </div>
            <div className="bottom">
                <div className="contacts">
                    <a href="mailto:info@ilmehelsinki.com">info@ilmehelsinki</a>
                    <a href="tel:+358 44 521 1301">+358 44 521 1301</a>
                    <a href="tel:+358 50 441 4009">+358 50 441 4009</a>
                </div>
                <div className="social-media">
                    <span className="fab fa-instagram" onClick={() => window.open("https://www.instagram.com/ilmehelsinki/?hl=en", "_blank")} />
                </div>
            </div>
        </footer>
    )
}