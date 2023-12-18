export default function BackgroundVideo() {

    return( 
        <div className="background-video">
            <video autoPlay muted loop className="my-video" playsInline>
                <source src={process.env.PUBLIC_URL + '/images/backgroundVideoMuted.mp4'} type="video/mp4"/>
            </video>
            <h1>Ainutlaatuiset käsityöhuonekalut - <span style={{color: 'rgb(184 212 255)'}}>Helsinkiläistä</span> muotoilua kotiisi.</h1>
        </div>
        )
}