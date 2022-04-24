import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 50%;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 10px;
  ${mobile({ width: '100%' })};
`

const Title = styled.h2`
  margin-top: 10px;
  font-weight: 300;
  letter-spacing: 2px;
`

const Form = styled.form`
  label {
    display: block;
    color: #777;
    margin-bottom: 10px;
  }

  .error-massage {
    display: none;
    color: red;
    font-size: 14px;
    margin-bottom: 15px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 5px;
  outline: none;
  border: 1px solid #777;
  border-radius: 5px;
  ${mobile({ width: '100%', padding: '10px' })};

  &:invalid ~ .error-massage {
    display: block;
  }
`

const Desc = styled.p`
  letter-spacing: 1px;
  line-height: 1.7;
  color: #333;
  font-weight: 500;
  margin-top: 6px;

  ${mobile({ fontSize: '15px' })};
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
`

export default function Register () {
  const [focus, setFocus] = useState(false)

  const [values, setValues] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const inputs = [
    {
      id: 1,
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      errorMassage: 'Only Letters and Not Numbers or Special Characters!',
      required: true,
      pattern: '[A-Za-z]{3,8}$'
    },
    {
      id: 2,
      type: 'text',
      label: 'Last Name',
      name: 'lastname',
      placeholder: 'Last Name',
      errorMassage: 'Only Letters and Not Numbers or Special Characters!',
      required: true,
      pattern: '[A-Za-z]{3,8}$'
    },
    {
      id: 3,
      type: 'text',
      label: 'Username',
      name: 'username',
      placeholder: 'User Name',
      errorMassage:
        "Username Should be 3-16 Characters and Sholdn't include any spcial character!",
      required: true,
      pattern: '[A-Za-z0-9]{3,16}$'
    },
    {
      id: 4,
      type: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Email',
      errorMassage: 'It Shold Be A Valid E-maill Address!',
      required: true
    },
    {
      id: 5,
      type: 'password',
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      errorMassage:
        'Password Shold be 8-20 characters and include at least 1 letter, 1 number abd 1 special character!',
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: 6,
      type: 'password',
      label: 'Confirm Password',
      name: 'confirmpassword',
      placeholder: 'Confirm Password',
      errorMassage: "Passwords don't match!",
      required: true,
      pattern: values.password
    }
  ]

  const handelChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handelFocus = e => {
    setFocus(true)
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {inputs.map(input => (
            <div className='input-form' key={input.id}>
              <label>{input.label}</label>
              <Input
                {...input}
                onChange={handelChange}
                value={values[input.name]}
                onBlur={handelFocus}
              />
              <span focused={focus.toString()} className='error-massage'>
                {input.errorMassage}
              </span>
            </div>
          ))}
          <Desc>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Desc>
          <Link
            to='/login'
            style={{ display: 'block', color: '#666', marginBottom: '20px' }}
          >
            Alearedy Have Acount!
          </Link>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
