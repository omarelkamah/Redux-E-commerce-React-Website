import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { addToCart, removeFromCart } from '../../redux/reducers/cartItem'
import { mobile } from '../../responsive'

const Container = styled.div``

const Wrapper = styled.div``

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  color: #333;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  ${mobile({ padding: '0 10px' })};
`

const TopButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  background: ${props => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${props => (props.type === 'filled' ? 'white' : 'black')};
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;

  ${mobile({ padding: '10px 5px' })};
`

const TopTexts = styled.div`
  ${mobile({ display: 'none' })};
`

const TopText = styled.span`
  margin-right: 10px;
  text-decoration: underline;
  letter-spacing: 1px;
  color: teal;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2%;
  padding: 30px;
  margin-top: 30px;

  ${mobile({ padding: '15px', flexDirection: 'column' })};
`

const ProductInfo = styled.div`
  flex: 2;

  .emptyCart {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    letter-spacing: 1px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

// const ProductSize = styled.span``

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

const Summary = styled.div`
  flex: 1;
  padding: 20px;
  height: 70vh;
  border: 1px solid teal;
  border-radius: 5px;
`

const TitleSummary = styled.h2`
  font-size: 35px;
  font-weight: 200;
  margin-top: 14px;
  letter-spacing: 2px;
`

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: ${props => props.type === 'total' && 'bold'};
  font-size: ${props => props.type === 'total' && '25px'};
`

const SummaryItemText = styled.div``

const SummaryItemPrice = styled.div``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 40px;
  cursor: pointer;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

export default function Cart (props) {
  // const { wishList } = props
  const { items } = useSelector(state => state.cart)
  const { wishList } = useSelector(state => state.wish)
  const dispatch = useDispatch()

  const getItemsPrice = items.reduce((a, b) => a + b.price * b.qty, 0)

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG.</Title>
        <Top>
          <Link to='/productlist'>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({items.length})</TopText>
            <Link to='/wishList'>
              <TopText>Your Wishlist ({wishList.length})</TopText>
            </Link>
          </TopTexts>
          <Link to='/checkout'>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <ProductInfo>
            {items.length === 0 ? (
              <div className='emptyCart'>Cart Item is Empty</div>
            ) : (
              ''
            )}

            {items.map(item => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={item.image} alt={item.title} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item.id}
                      </ProductId>
                      {/* <ProductColor color='black' /> */}
                      {/* <ProductSize>
                        <b>Size:</b> 37.5
                      </ProductSize> */}
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
          </ProductInfo>
          <Summary>
            <TitleSummary>ORDER SUMMARY</TitleSummary>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {getItemsPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {getItemsPrice.toFixed(3)}</SummaryItemPrice>
            </SummaryItem>
            <Link to='/checkout'>
              <Button>CHECK OUT</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
