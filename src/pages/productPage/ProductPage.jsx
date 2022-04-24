import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import SingleProduct from '../../components/singleProduct/SingleProduct'

const Container = styled.div``

export default function ProductPage (props) {
  const productId = useParams()

  return (
    <Container>
      <SingleProduct productId={productId.id} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
