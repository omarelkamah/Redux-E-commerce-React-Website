import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addToCart } from '../../redux/reducers/cartItem'
import { addToWishList } from '../../redux/reducers/wishListItem'
import { mobile } from '../../responsive'

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 21%);
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
`

const Container = styled.div`
  width: 23%;
  background-color: #f5fbfd;
  margin: 10px;
  gap: 2%
  padding: 20px;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;

  ${mobile({ width: '100%' })};

  &:hover ${InfoContainer} {
    opacity: 1;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`

const Icon = styled.div`
  background: #000000e3;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export default function Product (props) {
  const { item } = props
  const dispatch = useDispatch()

  return (
    <Container>
      <Link to={`/productlist/${item.id}`} style={{}}>
        <ImgContainer>
          <Img src={item.img} />
        </ImgContainer>
        <InfoContainer>
          <Icon>
            <i
              className='fas fa-shopping-cart'
              onClick={() => dispatch(addToCart(item))}
            ></i>
          </Icon>
          <Icon>
            <i className='fas fa-search'></i>
          </Icon>
          <Icon>
            <i
              className='fas fa-heart'
              onClick={() => dispatch(addToWishList(item))}
            ></i>
          </Icon>
        </InfoContainer>
      </Link>
    </Container>
  )
}
