import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AllMovieSection from '../components/AllMovieSection'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
    
        <div>
          <Hero/>
          <AllMovieSection/>
        </div>
    </div>
  )
}

export default HomePage