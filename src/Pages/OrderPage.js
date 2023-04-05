import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Order from '../components/Order';
import Footer from '../components/Footer';

export default function OrderPage({items}) {

    const [imageIndex, setImageIndex] = useState(0)
    const [modelIndex, setModelIndex] = useState(0)


    const navigate = useNavigate()

    const { id } = useParams()
    const idExists = items.length > 0 && items.some(item => item.id === id)
    const item = idExists ? items.find(item => item.id === id) : null

    const handleNextImage = () => {
      const img = document.querySelector(".order-img")
      img.classList.add("fade-active")
      setTimeout(() => {
        setImageIndex(current => {
          return (current === item.productImages.length - 1 ? 0 : current + 1)
         })
        img.classList.remove("fade-active")
      },500)
    }

    const handlePreviousImage = () => {
      const img = document.querySelector(".order-img")
      img.classList.add("fade-active")
      setTimeout(() => {
        setImageIndex(current => {
          return (current === 0 ? item.productImages.length - 1 : current - 1)
         })
        img.classList.remove("fade-active")
      },500)
    }

    const handleOptions = (e) => {
      console.log(e.target.value)
      setModelIndex(current => e.target.value)
    }

    return (
        <div className='container'>
        {items.length === 0 ? (
          <div>Loading...</div>
        ) : item ? (
          <div className='page-container'>
            <h1 onClick={() => navigate(`/`)} style={{"cursor": "pointer"}}>ILME</h1>
            <div className='top'>
                <div className='go-back' onClick={() => navigate(`/`)}>
                  <span className="material-symbols-outlined">arrow_back</span>
                  <p>Palaa takaisin</p>
                </div>
            </div>
            <div className='item'>
                 <div className="product-page-image">
                    <div className="order-img" style={{backgroundImage: `url(.${item.productImages[imageIndex]})`}}></div>
                    <div className="overlay">
                      <button onClick={handlePreviousImage} className="material-symbols-outlined">arrow_back</button>
                      <button onClick={handleNextImage} className="material-symbols-outlined">arrow_forward</button>
                    </div>
                 </div>
                 <div className='info'>
                    <div><h2>{item.name}</h2></div>
                    <p>{item.models ? item.models[modelIndex].price : item.price}€</p>
                    <p>{item.summary}</p>
                    <p>{item.description}</p>
                    <div className='item-measures'>
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
            <Order />
            <Footer />
          </div>
        ) : (
          <h1>Page Not Found</h1>
        )}
      </div>
    )
}