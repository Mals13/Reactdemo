import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Spotify.png'
import './Home.css'

const Home = () => {
    return (
        <>

            <div className='container'>

                <img src={image} alt="" />
                <div className='p'>Premium</div>
                <div className='h'>Help</div>
                <div className='d'>Download</div>
                <Link to={"/Register"} >
                    <div className='s'>Sign up</div></Link>
                <Link to={"/Login"} >
                    <div className='l'>Log In</div></Link>

            </div>

            <div className='container2'>
                <div className='write'>
                    <div className='h1'>Music for everyone.</div>
                    <div className='h2'>Millions of songs. No credit card needed.</div>
                    <Link to={"/Login"} >
                        {/* <div className='b'>GET SPOTIFY FREE</div></Link> */}
                        <button type="submit" value="Submit">Submit</button></Link>
                </div>
            </div>

        </>

    )
}

export default Home