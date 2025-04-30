import '../style.css'
import MusicBox from '/images/music_box.png';

function BannerLeft () {
    return (
        <div className='home-banner-left'>
            <div></div>

            <div className='home-banner-left-main-text'>
                Discover The Best Music Playlists And Albums.
            </div>

            <div>
                It is our Mission at Soulsounds to give you access to quality music at affordable rates with no extra charges.
            </div>

            <div className='home-banner-left-btn'>
                <button>Get Started</button>
                <button>Login</button>
            </div>
        </div>
    )
}

function BannerRight () {
    return (
        <div className='home-banner-right'>
            <img src={MusicBox} />
        </div>
    )
}

export function Banner () {
    return (
        <div className='home-banner'>
            <BannerLeft />
            <BannerRight />
        </div>
    )
}