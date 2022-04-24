import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  background: white;
  border-radius: 10px;
  padding: 20px;

  ${mobile({ width: '100%', margin: '10px' })};
`

const Title = styled.h2`
  margin-top: 10px;
  font-weight: 300;
  letter-spacing: 2px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.input`
  padding: 15px 10px;
  margin-bottom: 15px;
  outline: none;
  border: 1px solid #777;
  border-radius: 5px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 12px 40px;
  border: none;
  outline: none;
  letter-spacing: 1px;
  font-weight: bold;
  color: white;
  background: teal;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
`

// const Link = styled.a`
//     margin-top: 10px;
//     text-decoration: underline;
//     color: #333;
//     letter-spacing: 1px;
//     dispaly: block
// `;

export default function LogIn ({ user, setUser }) {
  const emailRef = useRef()
  const passRef = useRef()

  const handelSubmit = e => {
    setUser(true)
    e.preventDefault()
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handelSubmit}>
          <Input ref={emailRef} type='email' required placeholder='Email' />
          <Input
            ref={passRef}
            type='password'
            required
            placeholder='Password'
          />
          <Button onClick={() => setUser(true)}>LOGIN</Button>
          <Link to='/register' style={{ color: '#333' }}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
        {user && (
          <div className='forTest'>
            <h4>Now Your Are Sign</h4>
            <Link to='/'>Go To Home</Link>
          </div>
        )}
      </Wrapper>
    </Container>
  )
}
