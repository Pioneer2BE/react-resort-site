import React from 'react'

import Header from '../components/Header';
import Hero from '../components/Hero';
import ResortListing from '../components/ResortListing';
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main>
                <Hero/>
                <ResortListing/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage
