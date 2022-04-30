import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { allProducts } from '../../Data'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/cartItem'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  gap: 3%;

  ${mobile({ flexDirection: 'column', padding: '20px' })};
`

const ImgContainer = styled.div`
  flex: 1;
`

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: '80vh' })};
`

const InfoContainer = styled.div`
  flex: 1;
`

const Title = styled.h2`
  letter-spacing: 2px;
  font-size: 40px;
  font-weight: 100;
  color: #333;
  margin: 0;
`

const Desc = styled.p`
  color: #444;
  line-height: 1.7;
  letter-spacing: 1px;
`

const Price = styled.span`
  font-size: 35px;
  font-weight: 100;
  display: block;
  margin-top: 25px;
`
const Category = styled.div`
  width: fit-content;
  padding: 5px 10px;
  background: #008080;
  color: white;
  border-radius: 5px;
  font-size: 14px;
`

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 25px;
  ${mobile({ width: '100%' })};
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    cursor: pointer;
  }
`

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #008080;
  min-width: 25px;
  min-height: 25px;
  border-radius: 5px;
  margin: 0 10px;
  font-weight: bold;
  font-size: 19px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: white;
  border: 2px solid teal;
  border-radius: 4px;
`

export default function SingleProduct ({ productId }) {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchSingleData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const singleProduct = await res.json()
      setProduct(singleProduct)
      return singleProduct
    }
    fetchSingleData()
  }, [productId])

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Category>{product.category}</Category>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>

          <AddContainer>
            <AmountContainer>
              <i
                className='fas fa-minus'
                onClick={() => dispatch(removeFromCart(product))}
              ></i>
              <Amount>
                {items.length !== 0
                  ? items.map(item => <>{productId == item.id && item.qty}</>)
                  : '0'}
              </Amount>
              <i
                className='fas fa-plus'
                onClick={() => dispatch(addToCart(product))}
              ></i>
            </AmountContainer>
            <Button onClick={() => dispatch(addToCart(product))}>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
