export default function AboutUs({blogs}) {
    return (
        <div className="about-us">
            <h1>Meistä</h1>
            <div className="about-us-container">
                <img src={process.env.PUBLIC_URL + "/images/yhteiskuva.jpeg"} alt="yhteiskuva"/>
                <div className="info">
                    <h2>Ilmettä kotiisi?</h2>
                    <p>Ilme on helsinkiläinen design studio, joka tuottaa ainutlaatuisia huonekaluja inspiroiviin kohtauspaikkoihin kotona, toimistoissa ja julkisissa tiloissa. Omaperäiset ja rohkeat muodot näkyvät tuotteissamme. Valmistamme huonekaluja sekä taide-esineitä Ilmeen omalla verstaalla Helsingissä. Toteutamme myös mittatilaustöitä ja suurempia kokonaisuuksia. Näistä lisää alempana kohdassa projektit.</p>
                    <div className="articles">
                    <h2>Artikkelit</h2>
                    <ul> 
                        {blogs.length > 0 ? blogs.map(blog => {
                            return blog.source !== "" ? <li key={blog.source}><a href={blog.source} target="blank">{blog.source}</a></li> : ''
                        }) : ''}
                    </ul>
                    </div>
                    <div className="article-images">
                        <img src= {process.env.PUBLIC_URL + "/images/artikkeli1.jpeg"} alt="Elle decoration"/>
                        <img src= {process.env.PUBLIC_URL + "/images/artikkeli2.jpeg"} alt="Deko"/>
                    </div>
                </div>
            </div>
        </div>
    )
}