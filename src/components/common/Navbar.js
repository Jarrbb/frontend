import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* width: 100vw; */
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 0 1em;
  padding-right: 2em;
  /* transition: color 500ms, background 500ms, box-shadow 500ms; */
  background-color: blue;
  padding: 0 7rem;
`
const Logo = styled.h1`
  text-shadow: 3px 3px #000;
  color: #fff;
  font-size: 30px;
`
const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: grey;
  margin: 0 10px;
`
const NavItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const SearchInput = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 5px;
`

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <NavItem>
        <Logo>Jarb</Logo>
      </NavItem>
      <NavItem>
        <SearchInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Find something..."
        />
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </NavItem>
      <NavItem>
        <Profile></Profile>
      </NavItem>
    </Container>
  )
}

export default Navbar
