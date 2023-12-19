export default function AboutUs({blogs}) {

/**  OLD
 <h1>Meistä</h1>
            <div className="about-us-container">
                <img className="founderImg" src={process.env.PUBLIC_URL + "/images/yhteiskuva.jpeg"} alt="yhteiskuva"/>
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
*/

    return (
        <div className="about-us">
            <div className="about-hero">
                <img className="about-us-image" alt="Kanto" src={process.env.PUBLIC_URL + "/images/kanto.jpeg"}/>
                <p>Käsintehtyjen huonekalujen valmistus luo ainutlaatuisen yhteyden työhön. Se herättää arvostusta käytettyjä materiaaleja ja valmistusprosessia kohtaan, muuttaen jokaisen huonekalun kotisi henkilökohtaiseksi tarinaksi.</p>
            </div>
            <div className="about-main">
                <img className="collab-image reveal" alt="Yhteiskuva" src={process.env.PUBLIC_URL + "/images/yhteiskuva.jpeg"}/>
                <p className="reveal">Ilme on Helsinkiläinen design studio, joka tuottaa ainutlaatuisia huonekaluja inspiroiviin kohtauspaikkoihin kotona, toimistoissa ja julkisissa tiloissa. Omaperäiset ja rohkeat muodot näkyvät tuotteissamme. Valmistamme huonekaluja sekä taide-esineitä Ilmeen omalla verstaalla Helsingissä. Toteutamme myös mittatilaustöitä ja suurempia kokonaisuuksia. Näistä lisää alempana kohdassa projektit.</p>
            </div>
            <div className="articles">
                <p className="reveal">"Jokaisen huonekalun laatu on pehmeä ja luonnollinen. Voit nähdä, kuinka ainutlaatuinen jokainen kappale on, tehden jokaisesta myytävästä tuotteesta erityisen."</p>
                <div className="article-images reveal">
                    <div className="article">
                    <p>Elle decoration</p>
                    <img src= {process.env.PUBLIC_URL + "/images/artikkeli1.jpeg"} alt="Elle decoration"/>
                    </div>
                    <div className="article">
                        <p>Deko</p>
                        <img src= {process.env.PUBLIC_URL + "/images/artikkeli2.jpeg"} alt="Deko"/>
                    </div>
                </div>
            </div>
        </div>
    )
}