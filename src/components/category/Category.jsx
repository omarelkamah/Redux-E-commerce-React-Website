import styled from 'styled-components'
import { mobile } from '../../responsive'
import CategoryItems from './categoryItems/CategoryItems'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  ${mobile({ flexDirection: 'column', padding: '15px' })}
`

export default function Category () {
  const categories = [
    {
      id: 1,
      img:
        'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'SHIRT STYLE!',
      link: "men's clothing"
    },
    {
      id: 2,
      img:
        'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'LOUNGEWEAR LOVE',
      link: 'jewelery'
    },
    {
      id: 3,
      img:
        'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      title: 'LIGHT JACKETS',
      link: "women's clothing"
    }
  ]

  return (
    <Container>
      {categories.map(item => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  )
}
