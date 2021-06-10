import React from 'react'

import Header from '../components/Header';
import Hero from '../components/Hero';
import ResortListing from '../components/ResortListing';
import Footer from '../components/Footer'

const HomePage = (props) => {
    return (
        <div>
            <Header/>
            <main>
                <Hero/>
                <ResortListing resorts= {props.resorts}/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage
