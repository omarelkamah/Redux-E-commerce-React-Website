import React from 'react';

import styled from 'styled-components';
const Container = styled.div`

`;

const Title = styled.h2`
    margin: 20px;
`;

const FliterContainer = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.h3`
    margin-right: 20px;
    color: #333;
`;
const Select = styled.select`
    margin-right: 10px;
    padding: 5px 10px;
    outline: none;
    background: white;
    border-radius: 4px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
`;
const Option = styled.option`
`;


export default function FilterProduct() {
  return (
    <Container>
        <Title>Dresses</Title>
            <FliterContainer>
                <Filter>
                    <FilterTitle>Filter Products:</FilterTitle>
                    <Select>
                        <Option disabled selected>
                        Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                        Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterTitle>Sort Products:</FilterTitle>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FliterContainer>
    </Container>
  );
}
