import styled from 'styled-components'
import { allProducts } from '../../Data'
import Product from '../product/Product'
import { useDispatch } from 'react-redux'
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
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Container>
      {allProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
