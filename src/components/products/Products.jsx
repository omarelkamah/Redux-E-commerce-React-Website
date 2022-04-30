import styled from 'styled-components'
import Product from '../product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/reducers/productSlice'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Products () {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(products)
  return (
    <Container>
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}
