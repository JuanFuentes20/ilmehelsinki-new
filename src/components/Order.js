import { useState } from "react"


const Notification = ({submitError}) => {

    const handleClose = () => {
        const notification = document.querySelector(".notification")
        notification.classList.remove("active")
    }

    return (
      <div className='notification'>
        {submitError ? (
          <p>Valitettavasti jokin meni vikaan lähetyksessä. Koita uudestaan ja mikäli vika toistuu, ole meihin yhteydessä.</p>
        ) : (
          <p>Jeei. Yhteydenottosi on vastaanotettu. Olemme teihin yhteydessä mahdollisimman pian.</p>
        )}
  
      <button onClick={handleClose}>Sulje</button>
      </div>
    )
  }

export default function Order() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // eslint-disable-next-line
    const [submitError, setSubmitError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailData = {
            name: name,
            email: email,
            message: message
        }

        setName('')
        setEmail('')
        setMessage('')
        console.log(mailData)
        setTimeout(()=> {
            const notification = document.querySelector(".notification")
            notification.classList.add("active")
        }, 1000)

    }

    return (
        <div className="order">
            <h2>Tilaa meiltä</h2>
            <p>Jätä meille yhteydenotto tässä tai soita numeroon <a href="tel:+358 44 521 1301">+358 44 521 1301</a>
            tai <a href="tel:+358 50 441 4009">+358 50 441 4009</a>. Kertokaa tarkemmin mikäli haluatte
            tuotteeseen joitain pieniä muutoksia, tai mikäli haluatte tuotteen mallikuvan tyylisenä. Ottakaa yhteyttä
            myös tilanteissa, missä haluatte tietää lisää.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nimi</label>
                <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="email">Sähköposti</label>
                <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="message">Viesti</label>
                <textarea name="message" type="text" value={message} onChange={e => setMessage(e.target.value)}/>
                <button type="Submit">Lähetä</button>
            </form>
            <Notification submitError={submitError}/>
        </div>
    )

}