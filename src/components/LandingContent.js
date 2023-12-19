import React, {useState} from 'react';

const LandingContent = () => {
    const [customerEmail, setCustomerEmail] = useState('')

    const subscribeFor = (e) => {
        e.preventDefault()
        console.log(`Added ${customerEmail} to the mailing list.`)
        setCustomerEmail('')
    }

    return (
        <div className='landing'>
            <div className='product-tag reveal'>
                <p>Käsityönä valmistetut huonekalut, joissa yhdistyvät ajaton pohjoismainen muotoilu ja kestävät materiaalit.</p>
            </div>
            <div className='categories'>
                <div className='category reveal'>
                    <img alt='Pöydät kategoria' src={process.env.PUBLIC_URL + "/images/karkki3.jpeg"}/>
                    <p>Pöydät</p>
                </div>
                <div className='category reveal'>
                    <img alt='Tuolit kategoria' src={process.env.PUBLIC_URL + "/images/rockstar.jpeg"}/>
                    <p>Tuolit</p>
                </div>
                <div className='category reveal'>
                    <img alt='Senkit kategoria' src={process.env.PUBLIC_URL + "/images/senkki1.jpeg"}/>
                    <p>Senkit</p>
                </div>
                <div className='category reveal'>
                    <img alt='Tasot kategoria' src={process.env.PUBLIC_URL + "/images/laineikko4.jpeg"}/>
                    <p>Tasot</p>
                </div>
            </div>
            <div className='subscription reveal'>
                <h3>Tilaa</h3>
                <p>Liity sähköpostilistallemme saadaksesi uutisia ja päivityksiä.</p>
                <form>
                <input className='subs-email' type='email' placeholder='Sähköposti' value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}></input>
                <button type='submit' onClick={subscribeFor}>Tilaa</button>
                </form>
                <p>Kunnioitamme yksityisyyttäsi.</p>
            </div>
        </div>
    );
};

export default LandingContent;