import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
