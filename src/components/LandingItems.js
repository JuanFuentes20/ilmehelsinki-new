import { useState, useEffect } from "react"

export default function LandingItem({items, handleBuy}) {

    const [currentItem, setCurrentItem] = useState(0)

    useEffect(() => {
        if(items.length > 0){
            const interval = setInterval(() => {
                handleTransition()
            }, 5000)
            
            return () => clearInterval(interval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items.length])

    const handleTransitionEnd = () => {
        const fadeElement = document.querySelector('.fade')
        fadeElement.classList.remove('fade-active')
      };

      const handleTransition = () => {
        const fadeElement = document.querySelector('.fade')
        fadeElement.classList.add('fade-active')
        setTimeout(() => {
            setCurrentItem(currentItem => (currentItem + 1) % items.length)
          }, 1000)
      }

    return( 
        <div className="background-video">
            {items.length > 0 ? ( 
            <div className="fade" onTransitionEnd={handleTransitionEnd}>
                <div className="item-description">
                    <div className="title"><h1>{items[currentItem].summaryTitle}</h1></div>
                    <p>{items[currentItem].summary}</p>
                </div>
                <div className="oval">
                    <div className="image-container" style={{backgroundImage: `url(${items[currentItem].posterImg})`}}>
                        <div className="overlay">
                            <button className="buy-button" onClick={() => handleBuy(items[currentItem])}>Tilaa</button>
                        </div>
                    </div>
                    <div className="item-info">
                        <ul>
                            <li><strong>{items[currentItem].name}</strong></li>
                            <li>{items[currentItem].price}€</li>
                            <li>{items[currentItem].rating}/5 - {items[currentItem].ratingNro} Arviointia</li>                            </ul>
                    </div>
                </div>
            </div>) : <h2>Loading...</h2>}
       
        </div>)
}