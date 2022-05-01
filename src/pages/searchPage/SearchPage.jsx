import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SearchedPage = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: 798px) {
    flex-direction: column;
  }
`
const EmptyResult = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  color: #333;
  font-weight: bold;
  text-align: center;
  @media (max-width: 798px) {
    font-size: 30px;
  }
`

const SearchPage = () => {
  const { products } = useSelector(state => state.products)
  const productTitle = useParams()
  const product = productTitle.productName
  const searchedProducts = products.filter(onlyProduct => {
    return onlyProduct.title.toLowerCase().includes(product)
  })

  return (
    <SearchedPage>
      {searchedProducts.length === 0 && (
        <EmptyResult>Your Searched Not Mathced...!</EmptyResult>
      )}
      {searchedProducts.map(item => (
        <Product product={item} key={item.id} />
      ))}
    </SearchedPage>
  )
}

export default SearchPage
