import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`

const ImgContainer = styled.div`
  height: 70vh;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const Title = styled.h2`
  letter-spacing: 2px;
  font-size: 30px;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 15px;
  border-radius: 5px;
  background: white;
`

export default function CategoryItems ({ item }) {
  return (
    <Container>
      <ImgContainer>
        <Img src={item.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Link to='/productlist'>
          <Button>SHOP NOW</Button>
        </Link>
      </InfoContainer>
    </Container>
  )
}
