import React from 'react'
import { FeaturedProducts, Hero, Services, AboutSendEmail } from '../components'

const HomePage = () => {

  return (
    <section>
      <Hero />
      <FeaturedProducts />
      <Services />
      <AboutSendEmail />
    </section>
  )
}

export default HomePage
