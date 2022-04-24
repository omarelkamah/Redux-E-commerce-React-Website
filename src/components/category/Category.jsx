import styled from 'styled-components';
import CategoryItems from '../categoryItems/CategoryItems';
import {categories} from '../../Data';
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    box-sizing: border-box;
    ${mobile({flexDirection : "column", padding: "15px"})}
`

export default function Category() {
  return (
      <Container>
          {categories.map(item => (
                <CategoryItems item={item} key={item.id} />
          ))}
      </Container>
  )
}
