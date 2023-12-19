export default function AboutUs() {

    return (
        <div className="about-us">
            <header className="about-hero">
                <img className="about-us-image" alt="Kanto" src={process.env.PUBLIC_URL + "/images/kanto.jpeg"}/>
                <p>Käsintehtyjen huonekalujen valmistus luo ainutlaatuisen yhteyden työhön. Se herättää arvostusta käytettyjä materiaaleja ja valmistusprosessia kohtaan, muuttaen jokaisen huonekalun kotisi henkilökohtaiseksi tarinaksi.</p>
            </header>
            <div className="about-main">
                <img className="collab-image" alt="Yhteiskuva" src={process.env.PUBLIC_URL + "/images/yhteiskuva.jpeg"}/>
                <p>Ilme on Helsinkiläinen design studio, joka tuottaa ainutlaatuisia huonekaluja inspiroiviin kohtauspaikkoihin kotona, toimistoissa ja julkisissa tiloissa. Omaperäiset ja rohkeat muodot näkyvät tuotteissamme. Valmistamme huonekaluja sekä taide-esineitä Ilmeen omalla verstaalla Helsingissä. Toteutamme myös mittatilaustöitä ja suurempia kokonaisuuksia. Näistä lisää alempana kohdassa projektit.</p>
            </div>
            <div className="articles">
                <p className="reveal">"Jokaisen huonekalun laatu on pehmeä ja luonnollinen. Voit nähdä, kuinka ainutlaatuinen jokainen kappale on, tehden jokaisesta myytävästä tuotteesta erityisen."</p>
                <div className="article-images">
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