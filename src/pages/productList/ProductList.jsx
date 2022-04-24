import React from 'react'
import FilterProduct from '../../components/filterProduct/FilterProduct'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Products from '../../components/products/Products'

export default function ProductList () {
  return (
    <>
      <FilterProduct />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}
