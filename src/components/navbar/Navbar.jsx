import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge'
import { mobile } from '../../responsive'
import { useSelector } from 'react-redux'

const Container = styled.div`
    min-height: 70px;f
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${mobile({ padding: '20px 10px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchContainer = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  ${mobile({ width: '85px' })}
`

const Input = styled.input`
  flex: 1;
  height: 100%;
  padding: 7px;
  border: none;
  outline: none;
  ${mobile({ width: '57px' })}
`

const Center = styled.div`
  flex: 8;
  text-align: center;
`

const Logo = styled.h2`
  margin: 0;
  color: #333;
  letter-spacing: 1px;
  text-transform: capitalize;
  ${mobile({ display: 'none' })}
`

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  text-transform: uppercase;
  margin-right: 15px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  ${mobile({
    fontSize: '14px',
    fontWeight: 'normal',
    marginRight: '10px',
    width: '51px'
  })}

  a {
    text-decoration: none;
  }
`

function Navbar (props) {
  const { user } = props

  const { items } = useSelector(state => state.cart)
  const { wishList } = useSelector(state => state.wish)

  const inputSearch = useRef()
  const navigate = useNavigate()

  const handelSearch = e => {
    const inputValue = inputSearch.current.value.toLowerCase()
    inputSearch.current.value = ''
    navigate(`/search/${inputValue}`)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer
            onSubmit={e => {
              e.preventDefault()
              return handelSearch()
            }}
          >
            <Input placeholder='Search' ref={inputSearch} />
            <i
              className='fas fa-search'
              onClick={() => handelSearch()}
              style={{ color: 'gray', fontSize: 16, marginRight: 10 }}
            ></i>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to='/' className='theLink'>
              E-Commerce App.
            </Link>
          </Logo>
        </Center>
        <Right>
          <Item>
            {!user && (
              <Link to='/register' className='theLink'>
                rigister
              </Link>
            )}
          </Item>
          <Item>
            {!user && (
              <Link to='/login' className='theLink'>
                sigin in
              </Link>
            )}
          </Item>
          <Item>
            <Link to='/cart' style={{ color: '#333', marginRight: '15px' }}>
              <Badge badgeContent={items.length} color='primary'>
                <i className='fas fa-cart-plus'></i>
              </Badge>
            </Link>
            <Link to='/wishlist' style={{ color: '#333' }}>
              <Badge badgeContent={wishList.length} color='primary'>
                <i className='fas fa-heart'></i>
              </Badge>
            </Link>
          </Item>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
