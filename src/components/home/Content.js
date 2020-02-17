import React from 'react'
import styled from 'styled-components'
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'

const Component = styled.div`
  width: 100%;
  border: 1px solid #fff;
`
const View = styled.div`
  display: flex;
  flex-direction: row;
`
const Img = styled.img`
  width: 30%;
`
const Data = styled.div`
  padding: 0 5px;
`
const Title = styled.h2`
  color: #fff;
`
const Description = styled.p`
  color: #fff;
`
const Action = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`
const ActionBox = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #fff;
  padding: 7px 0;
`

const Content = () => {
  return (
    <Component>
      <View>
        <Img src="https://pbs.twimg.com/media/C2XbmBuXUAEAjpV.jpg" />
        <Data>
          <Title>Header</Title>
          <Description>description</Description>
        </Data>
      </View>
      <Action>
        <ActionBox>
          <FaThumbsUp />
        </ActionBox>
        <ActionBox>
          <FaCommentAlt />
        </ActionBox>
        <ActionBox>
          <FaShare />
        </ActionBox>
      </Action>
    </Component>
  )
}

export default Content
