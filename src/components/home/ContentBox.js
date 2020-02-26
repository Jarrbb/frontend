import React from 'react'
import styled from 'styled-components'
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'

const Component = styled.div`
  width: 286px;
  /* height: 286px; */
  border: 1px solid #fff;
  margin: 10px;
`
const Img = styled.img`
  width: 100%;
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

const ContentBox = () => {
  return (
    <Component>
      <Img src="https://pbs.twimg.com/media/C2XbmBuXUAEAjpV.jpg" />

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

export default ContentBox
