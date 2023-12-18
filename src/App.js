import BackgroundVideo from "./components/BackgroundVideo";
import OurFavoriteCollection from "./components/OurFavoritecollection";
import FavouriteCollection from "./components/FavouriteCollection";
import {useNavigate} from 'react-router-dom'
import LandingContent from "./components/LandingContent";


function App({items, blogs, scroll}) {

  const navigate = useNavigate()
  const handleBuy = (item) => {
      console.log("Tilaa")
      navigate(`/tuote/${item.id}`)
      window.scrollTo(0, 0);
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
      <section> 
        <BackgroundVideo/>
        <LandingContent />
      </section>
    </div>
  );
}

export default App;
