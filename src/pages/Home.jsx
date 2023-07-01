import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/bgg.jpg'

const Home = () => {
    return (
        <>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='home'> Spotify</div>
            <div className='premium'>Premium</div>
            <div className='help'>Help</div>
            <div className='download'>Download</div>
            <div className='signup'>Sign up</div>
            <div className='login'>Log In</div>
            <div className='hlo'>hlo</div>
        </>
    )
}

export default Home