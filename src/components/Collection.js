import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Collection({items}) {
    const navigate = useNavigate()
    const [activeFilter, setActiveFilter] = useState("All")

    useEffect(()=> {
        const filters = document.querySelectorAll(".filter")
        filters.forEach(filter => {
            filter.style.textDecoration = "none"
            if(filter.innerHTML === activeFilter){
                filter.style.textDecoration = "underline"
            }
        })

    }, [activeFilter])
    let uniqueCategories = Array.from(new Set(items.map(item => item.category)));
    uniqueCategories.unshift("All")


    const handleBuy = (item) => {
        console.log("Tilaa")
        navigate(`/tuote/${item.id}`)
        window.scrollTo(0, 0);
    }

    const handleFilterClick = (event, category) => {
        event.preventDefault();
        setActiveFilter(category);
    };
    return (
        <div className="collection">
            <div className="collection-hero">
                <img className="about-us-image" alt="Kuva nojatuolista" src={process.env.PUBLIC_URL + "/images/furnitures.jpg"}/>
                <p>Luo yhteys huonekalujen suunnitteluprosessiin, herättäen kunnioitusta materiaaleja ja valmistustapaa kohtaan.</p>
            </div>
            <div className="accessibility">
                <h3>Tuotteet</h3>
                <div className="filters">
                    {uniqueCategories.map(category => {
                        return <button className="filter" key={category} onClick={(event) => handleFilterClick(event, category)}>{category}</button>
                    })}
                </div>
            </div>
            <div className="product-list">
            {items.map(item => {
                return (activeFilter === "All" || item.category === activeFilter) && 
                     (
                        <div className="product" key={item.id}>
                            <div className="product-img">
                                <img src={process.env.PUBLIC_URL + item.posterImg} alt={item.name}/>
                                <div className="overlay">
                                <button className="buy-button" onClick={() => handleBuy(item)}>Tilaa</button>
                                </div>    
                            </div>
                            <p>{item.name} {item.price}€</p>    
                </div>)
                
            })}
            </div>
        </div>
    )
}