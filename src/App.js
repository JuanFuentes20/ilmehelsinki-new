import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import OurFavoriteCollection from "./components/OurFavoritecollection";
import FavouriteCollection from "./components/FavouriteCollection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import {useNavigate} from 'react-router-dom'
import LandingContent from "./components/LandingContent";


function App({items, blogs, scroll}) {

  const navigate = useNavigate()
  const handleBuy = (item) => {
      console.log("Tilaa")
      navigate(`/tuote/${item.id}`)
      window.scrollTo(0, 0);
  }

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

/* OLD
<div className="App">
      <Navbar scrollToSection={scrollToSection}/>
      <LandingItem/>
      <div className="container">
      <OurFavoriteCollection />
      <FavouriteCollection items={items} handleBuy={handleBuy}/>
      </div>
      {<AboutUs blogs={blogs}/>}
      <div className="container">
      <Footer scrollToSection={scrollToSection}/>
      </div>
      </div>
*/


  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} scroll={scroll}/>
      <section> 
        <BackgroundVideo/>
        <LandingContent />
      </section>
      <Footer />
    </div>
  );
}

export default App;
