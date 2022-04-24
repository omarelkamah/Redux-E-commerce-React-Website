import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addToCart, removeFromCart } from '../../redux/reducers/cartItem'
import { mobile } from '../../responsive'

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 5%;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`
const Left = styled.div`
  flex: 2;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 17px;
  font-weight: bold;
  color: #333;
  letter-spacing: 1px;
`

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  color: #333;
  letter-spacing: 1px;

  &[type='submit'] {
    background: teal;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`
const Right = styled.div`
  flex: 1;

  .empty-list {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
`

const H3 = styled.h3`
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column', background: '#eee', margin: '20px 0' })};
`

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ flexDirection: 'column' })};
`

const Image = styled.img`
  width: 200px;
  margin-right: 30px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ alignItems: 'center' })};
`

const ProductName = styled.span`
  margin-bottom: 15px;
`

const ProductId = styled.span`
  margin-bottom: 15px;
`

const ProductColor = styled.span`
  margin-bottom: 15px;
  width: 30px;
  height: 30px;
  background: ${props => props.color};
  border-radius: 50%;
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20vh;
  align-items: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;

  i {
    cursor: pointer;
  }
`

const ProductAmount = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin: 0 5px;
`

const ProductPrice = styled.span`
  font-size: 30px;
  color: #333;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const TotalPrice = styled.div`
  padding: 10px;
  border: 2px solid teal;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: teal;
  font-size: 28px;
`

export default function CheckOut () {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)
  const getItemsPrice = items.reduce((a, b) => a + b.price * b.qty, 0)

  const inputs = [
    {
      id: 1,
      type: 'email',
      required: 'true',
      placeholder: 'Enter Your Email',
      label: 'Email'
    },
    {
      id: 2,
      type: 'text',
      required: 'true',
      placeholder: 'Enter Your Full Name',
      label: 'Full name'
    },
    {
      id: 3,
      type: 'text',
      required: 'true',
      placeholder: 'Enter Your country',
      label: 'Country'
    },
    {
      id: 3,
      type: 'text',
      required: 'true',
      placeholder: 'Enter Your Street Address',
      label: 'Street address'
    },
    {
      id: 4,
      type: 'text',
      required: 'true',
      placeholder: 'Enter Your City',
      label: 'City'
    },
    {
      id: 4,
      type: 'text',
      required: '',
      placeholder: 'Enter Your Postal Code',
      label: 'Postal code'
    },
    {
      id: 4,
      type: 'submit'
    }
  ]

  return (
    <Container>
      <Left>
        <Form>
          {inputs.map(input => (
            <>
              <Label>{input.label}</Label>
              <Input {...input} />
            </>
          ))}
        </Form>
      </Left>
      <Right>
        <H3>Products Details</H3>
        {items.length === 0 && (
          <div className='empty-list'>Empty List Please Go Shoping!</div>
        )}
        {items.map(item => (
          <>
            <Product>
              <ProductDetail>
                <Image src={item.img} alt={item.title} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.id}
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <i
                    class='fas fa-minus'
                    onClick={() => dispatch(removeFromCart(item))}
                  ></i>
                  <ProductAmount>{item.qty}</ProductAmount>
                  <i
                    class='fas fa-plus'
                    onClick={() => dispatch(addToCart(item))}
                  ></i>
                </ProductAmountContainer>
                <ProductPrice>${item.price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </>
        ))}
        <TotalPrice>${getItemsPrice}</TotalPrice>
      </Right>
    </Container>
  )
}
