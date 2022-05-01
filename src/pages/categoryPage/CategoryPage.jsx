import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../../components/product/Product'
import { mobile } from '../../responsive'
const Container = styled.div``

const Wrapper = styled.div`
  // min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: 798px) {
    flex-direction: column;
  }
`
const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 30px;
  ${mobile({ fontSize: '25px' })};
`

const CategoryPage = () => {
  const { categoryName } = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])
  useEffect(() => {
    const getCateoryProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      )
      const data = await res.json()
      setCategoryProducts(data)
    }
    getCateoryProducts()
  }, [categoryName])
  console.log(categoryProducts)
  return (
    <Container>
      <CategoryTitle>Welcome In {categoryName} category..</CategoryTitle>
      <Wrapper>
        {categoryProducts.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default CategoryPage
