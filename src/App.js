import Navbar from "./components/Navbar";
import LandingItem from "./components/LandingItems";
import OurFavoriteCollection from "./components/OurFavoritecollection";
import FavouriteCollection from "./components/FavouriteCollection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import {useNavigate} from 'react-router-dom'


function App({items, blogs}) {

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

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection}/>
      <LandingItem/>
      <div className="container">
      <OurFavoriteCollection />
      <FavouriteCollection items={items} handleBuy={handleBuy}/>
      </div>
      <AboutUs blogs={blogs}/>
      <div className="container">
      <Footer scrollToSection={scrollToSection}/>
      </div>
    </div>
  );
}

export default App;
