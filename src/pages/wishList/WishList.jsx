import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../../redux/reducers/cartItem'
import { mobile } from '../../responsive'

const Container = styled.div`
  .empty {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
`
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    flexDirection: 'column',
    background: '#eee',
    margin: '20px 0',
    padding: '10px'
  })};
`

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ flexDirection: 'column' })};
`

const Image = styled.img`
  width: 450px;
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

const Button = styled.button`
  background: transparent;
  border: 2px solid teal;
  color: teal;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const WishList = () => {
  const dispatch = useDispatch()
  const { wishList } = useSelector(state => state.wish)
  return (
    <Container>
      {wishList.length === 0 && <div className='empty'>WishList Is Empty!</div>}
      {wishList.map(item => (
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
                <Button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </Button>
              </Details>
            </ProductDetail>
          </Product>
          <Hr />
        </>
      ))}
    </Container>
  )
}

export default WishList
