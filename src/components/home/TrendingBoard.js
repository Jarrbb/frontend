import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  /* flex-direction: row;
  justify-content: flex-start; */
  /* align-items: center; */
  width: 100%;
  height: 300px;
  background-color: #418def;
`
const Header = styled.div`
  width: 100%;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeadText = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
`

const TrendingBoard = () => {
  return (
    <Component>
      <Header>
        <HeadText>Trending</HeadText>
      </Header>
    </Component>
  )
}

export default TrendingBoard
