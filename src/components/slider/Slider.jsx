import styled from 'styled-components'
import { useState } from 'react'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: 'none' })}
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Arrow = styled.div`
  position: absolute;
  top: 60%;
  bottom: 0;
  transform: translateY(-50%);
  font-size: 18px;
  background: rgb(0 0 0 / 35%);
  cursor: pointer;
  left: ${props => props.direction === 'left' && '24px'};
  right: ${props => props.direction === 'right' && '24px'};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`

const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #${props => props.bg};
  overflow: hidden;
  transition: 2s;
  transform: translate(${props => props.slideNum * -100}vw);
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
`

const Img = styled.img`
  width: 75%;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: #333;
  letter-spacing: 1px;
  font-size: 35px;
  margin: 0;
`

const Desc = styled.p`
  letter-spacing: 3px;
  color: #444;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.5;
`

const Button = styled.button`
  background: teal;
  color: white;
  border: navajowhite;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

export default function Slider () {
  const sliderItems = [
    {
      id: 1,
      img: 'https://i.ibb.co/cXFnLLV/3.png',
      title: 'SUMMER SALE',
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: 'f5fafd'
    },
    {
      id: 2,
      img: 'https://i.ibb.co/DG69bQ4/2.png',
      title: 'AUTUMN COLLECTION',
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: 'fcf1ed'
    },
    {
      id: 3,
      img: 'https://i.ibb.co/cXFnLLV/3.png',
      title: 'LOUNGEWEAR LOVE',
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: 'fbf0f4'
    }
  ]

  const [slideNum, setSlideNum] = useState(0)

  const handelSlider = dir => {
    if (dir === 'left') {
      setSlideNum(slideNum > 0 ? slideNum - 1 : 2)
    }

    if (dir === 'right') {
      setSlideNum(slideNum < 2 ? slideNum + 1 : 0)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Arrow direction='left' onClick={() => handelSlider('left')}>
          <i className='fas fa-chevron-left'></i>
        </Arrow>
        {sliderItems.map(item => (
          <SliderContainer key={item.id} bg={item.bg} slideNum={slideNum}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>
                <Link to='/productlist' className='theLink'>
                  SHOW NOW
                </Link>
              </Button>
            </InfoContainer>
          </SliderContainer>
        ))}
        <Arrow direction='right' onClick={() => handelSlider('right')}>
          <i className='fas fa-chevron-right'></i>
        </Arrow>
      </Wrapper>
    </Container>
  )
}
