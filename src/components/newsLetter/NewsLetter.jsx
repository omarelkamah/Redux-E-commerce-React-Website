import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 45px;
  letter-spacing: 3px;
  color: #333;
  ${mobile({ fontSize: '30px' })};
`

const Desc = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #444;

  ${mobile({ fontSize: '16px', textAlign: 'center' })};
`

const InputContainer = styled.div`
  display: flex;
  width: 64%;
  border: 1px solid lightgray;

  ${mobile({ width: '100%' })};
`

const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding: 10px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
  padding: 5px;
`

export default function NewsLetter () {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input type='email' placeholder='Your email' />
        <Button>
          <i class='fas fa-chevron-left'></i>
          <i class='fas fa-chevron-left'></i>
        </Button>
      </InputContainer>
    </Container>
  )
}
