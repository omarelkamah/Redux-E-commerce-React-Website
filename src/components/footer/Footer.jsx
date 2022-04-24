import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;

  ${mobile({ flexDirection: 'column' })};
`

const Left = styled.div`
  flex: 1;

  ${mobile({ marginBottom: '20px' })};
`

const Title = styled.h2`
  color: #333;
  margin-top: 0;
  letter-spacing: 2px;
`

const Desc = styled.p`
  color: #444;
  line-height: 1.7;
  margin-top: 0;
`

const SocialIcons = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  background: #${props => props.color};
  margin-right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const Center = styled.div`
  flex: 1;
  ${mobile({ display: 'none' })};
`

const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 50%;
`

const ListItem = styled.li`
  margin-bottom: 15px;

  a {
    color: #444;
    font-weight: bold;
    text-decoration: none;
  }
`

const Right = styled.div`
  flex: 1;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    color: #444;
    display: flex;
    align-items: center;
}
`

const Payment = styled.img``

export default function Footer () {
  return (
    <Container>
      <Left>
        <Title>E-Commerce App</Title>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIcons>
          <SocialIcon color='3B5999'>
            <i className='fab fa-facebook'></i>
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <i className='fab fa-instagram'></i>
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <i className='fab fa-twitter'></i>
          </SocialIcon>
          <SocialIcon color='E60023'>
            <i className='fab fa-pinterest'></i>
          </SocialIcon>
        </SocialIcons>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to='/'>Home</Link>
          </ListItem>
          <ListItem>
            <Link to='/cart'>Cart</Link>
          </ListItem>
          <ListItem>
            <Link to='/productlist'>Man Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to='/productlist'>Woman Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>Accessories</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>My Account</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>Order Tracking</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>Wishlist</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>Teams</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>Links</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <i className='fas fa-at' style={{ marginRight: '10px' }}></i>{' '}
          Alexandria , El-Mandara
        </ContactItem>
        <ContactItem>
          <i className='fas fa-phone' style={{ marginRight: '10px' }}></i> +20
          106 046 298
        </ContactItem>
        <ContactItem>
          <i className='fas fa-envelope' style={{ marginRight: '10px' }}></i>{' '}
          omarwork010@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}
