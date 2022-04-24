import styled from 'styled-components'
import { allProducts } from '../../Data'
import Product from '../product/Product'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Products () {
  return (
    <Container>
      {allProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
