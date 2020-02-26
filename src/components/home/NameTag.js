import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: grey;
  margin-right: 10px;
`
const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`

const NameTag = () => {
  return (
    <Component>
      <Profile></Profile>
      <Name>Username</Name>
    </Component>
  )
}

export default NameTag
