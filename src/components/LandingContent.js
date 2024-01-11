import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LandingContent = () => {
    const [customerEmail, setCustomerEmail] = useState('')
    const navigate = useNavigate()
    const subscribeFor = (e) => {
        e.preventDefault()
        console.log(`Added ${customerEmail} to the mailing list.`)
        setCustomerEmail('')
    }

    const handleCategoryClick = (category) => {
        navigate(`/collection?category=${category}`);
    }

    return (
        <div className='landing'>
            <div className='product-tag'>
                <p className='reveal'>Käsityönä valmistetut huonekalut, joissa yhdistyvät ajaton pohjoismainen muotoilu ja kestävät materiaalit.</p>
            </div>
            <div className='categories'>
                <div className='category reveal' onClick={() => handleCategoryClick("Pöytä")}>
                    <div className='img-container'><img alt='Pöydät kategoria' src={process.env.PUBLIC_URL + "/images/karkki3.jpeg"}/></div>
                    <p>Pöydät</p>
                </div>
                <div className='category reveal' onClick={() => handleCategoryClick("Tuoli")}>
                    <div className='img-container'><img alt='Tuolit kategoria' src={process.env.PUBLIC_URL + "/images/rockstar.jpeg"}/></div>
                    <p>Tuolit</p>
                </div>
                <div className='category reveal' onClick={() => handleCategoryClick("Senkki")}>
                    <div className='img-container'><img alt='Senkit kategoria' src={process.env.PUBLIC_URL + "/images/senkki1.jpeg"}/></div>
                    <p>Senkit</p>
                </div>
                <div className='category reveal' onClick={() => handleCategoryClick("Taso")}>
                    <div className='img-container'><img alt='Tasot kategoria' src={process.env.PUBLIC_URL + "/images/laineikko4.jpeg"}/></div>
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