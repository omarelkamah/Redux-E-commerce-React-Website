import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;  
    text-align: center;

    ${mobile({height: "40px"})};

`;

export default function Toper() {
  return (
      <Container>
          Super Deal! Free Shipping on Orders Over $50
      </Container>
  );
}
