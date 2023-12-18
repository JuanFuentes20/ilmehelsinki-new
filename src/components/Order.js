import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';


const Notification = ({submitError, setSubmitError}) => {

    const handleClose = () => {
        const notification = document.querySelector(".notification")
        notification.classList.remove("active")
        setSubmitError(false)
    }

    return (
      <div className='notification'>
        {submitError ? (
          <p>Valitettavasti jokin meni vikaan lähetyksessä. Koita uudestaan ja mikäli vika toistuu, ole meihin yhteydessä.</p>
        ) : (
          <p>Yhteydenottosi on vastaanotettu. Olemme teihin yhteydessä mahdollisimman pian.</p>
        )}
  
      <button onClick={handleClose}>Sulje</button>
      </div>
    )
  }

export default function Order() {

    // eslint-disable-next-line
    const [submitError, setSubmitError] = useState(false)
    const [captchaVerified, setVerified] = useState(false)
    const form = useRef()

    const validateForm = () => {
      if (form.current.user_name.value === '' || form.current.user_email.value === '' || form.current.message.value === ''){
        window.alert("Täytä jokainen kohta")
        return false
      }
      return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validated = validateForm()
        if(captchaVerified && validated){
          console.log("Sending message")
          emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              const notification = document.querySelector(".notification")
              notification.classList.add("active")
              e.target.reset()
          }, (error) => {
              console.log(error.text);
              setSubmitError(true)
          });
        }
    }

    const onChange = (value) => {
      setVerified(true)
    }

    return (
        <div className="container order">
            <h2>Tilaa meiltä</h2>
            <p>Jätä meille yhteydenotto tässä tai soita numeroon <a href="tel:+358 44 521 1301">+358 44 521 1301</a>
            tai <a href="tel:+358 50 441 4009">+358 50 441 4009</a>. Kertokaa tarkemmin mikäli haluatte
            tuotteeseen joitain pieniä muutoksia, tai mikäli haluatte tuotteen mallikuvan tyylisenä. Ottakaa yhteyttä
            myös tilanteissa, missä haluatte tietää lisää.</p>
            <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="name">Nimi</label>
                <input name="user_name" type="text"/>
                <label htmlFor="email">Sähköposti</label>
                <input name="user_email" type="email"/>
                <label htmlFor="message">Viesti</label>
                <textarea name="message" type="text"/>
                <ReCAPTCHA
                sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                onChange={onChange}
              />
                <button disabled={!captchaVerified} style={{ opacity: !captchaVerified ? 0.2 : 1 }}type="Submit">Lähetä</button>
            </form>
            <Notification submitError={submitError} setSubmitError={setSubmitError}/>
        </div>
    )
}