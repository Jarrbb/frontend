import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FaPlus } from 'react-icons/fa'

const Component = styled.div`
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 7px #888888;
  cursor: pointer;
`
const NewButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #c7c8c9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 10px;
`
const NewText = styled.h3`
  color: #fff;
  margin: 10px;
`

const NewPage = () => {
  return (
    <Link to="/newPage">
      <Component>
        <NewButton>
          <FaPlus />
        </NewButton>
        <NewText>Create New Page</NewText>
      </Component>
    </Link>
  )
}

export default NewPage
