import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Category = styled.p`
  font-size: 30px;
  font-weight: 700;
`
const CategoryButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const CategoryButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: grey;
  margin: 15px;
  cursor: pointer;
`

const CategoryBoard = () => {
  return (
    <Component>
      <Category>Category</Category>
      <CategoryButtonGroup>
        {[1, 1, 1, 1, 1, 1].map((x, i) => (
          <CategoryButton key={i} />
        ))}
      </CategoryButtonGroup>
    </Component>
  )
}

export default CategoryBoard
