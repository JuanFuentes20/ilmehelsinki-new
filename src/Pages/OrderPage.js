import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Order from '../components/Order';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function OrderPage({items}) {

    const [modelIndex, setModelIndex] = useState(0)
    const navigate = useNavigate()
    const navigateTo = (path) => {
      navigate(path);
      window.scrollTo(0, 0); // Scroll to the top of the page
  };

    const { id } = useParams()
    const idExists = items.length > 0 && items.some(item => item.id === id)
    const item = idExists ? items.find(item => item.id === id) : null

    const navbar = document.querySelector(".navbar")
    if(navbar){
      navbar.style.color = "black"
      const hamburgerSpans = document.querySelectorAll(".hamburger span")
      hamburgerSpans.forEach(hamburgerSpan => hamburgerSpan.style.backgroundColor = "black")
      
    }

    const handleOptions = (e) => {
      setModelIndex(current => e.target.value)
    }

    return (
        items.length === 0 ? (
          <div>Loading...</div>
        ) : item ? (
          <>
          <div className='container page-container'>
            <div className='top'>
                <div className='go-back'>
                    <span className="material-symbols-outlined" onClick={() => navigateTo("/")}>arrow_back</span>
                </div>
            </div>
            <div className='item'>
                <div className="product-page-image">
                  <Carousel className='crsl'>
                    {item.productImages.map(image => {
                      return (
                            <img className='carousel-img' key={image} src={process.env.PUBLIC_URL + image} alt='productImage'/>
                      )
                    })}
                  </Carousel>
                </div>
                <div className='product-info'>
                  <h2>{item.name}</h2>
                  <div className='reveal'>
                    <p>{item.models ? item.models[modelIndex].price : item.price}€</p>
                    <p>{item.summary}</p>
                    <p>{item.description}</p>
                  </div>
                  <div className='item-measures reveal'>
                    <h2 style={{"paddingBottom":"5%"}}>Tuotetiedot</h2>
                    {item.models && (<div>
                      <select onChange={handleOptions}>
                        {item.models.map((model, index) => {
                          return <option key={model.size} value={index}>{model.size}</option>
                        })}
                      </select>
                    </div>)}
                    <ul>
                      <li>Korkeus: {item.models ? item.models[modelIndex].height : item.height}</li>
                      <li>Leveys: {item.models ? item.models[modelIndex].width : item.width}</li>
                      <li>Pituus: {item.models ? item.models[modelIndex].length : item.length}</li>
                    </ul>
                    
                  </div>
                </div>
            </div>
          </div>
          <Order/>
          </>
        ) : (
          <h1>Page Not Found</h1>
        )
    )
}