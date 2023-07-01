import React from "react"

export default function FavouriteCollection({ handleBuy ,items}) {

    return (
        <div className="favourite-collection">
            {items.map(item => {
                return (
                <div className="favourite-item" key={item.id}>
                    <div><img src={process.env.PUBLIC_URL + item.posterImg} alt={item.name}/></div>
                    <p>{item.name} {item.price}€</p>
                    <div className="overlay">
                        <button className="buy-button" onClick={() => handleBuy(item)}>Tilaa</button>
                    </div>
                    
                </div>)
            })}
        </div>
    )
}