export default function LandingItem() {

    return( 
        <div className="background-video">
            <video autoPlay muted loop className="my-video" playsInline>
                <source src={process.env.PUBLIC_URL + '/images/backgroundVideoMuted.mp4'} type="video/mp4"/>
            </video>
        </div>
        )
}