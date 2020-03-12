import React from 'react'

import {
  Container,
  Header,
  HeadImage,
  ImageDiv,
  Rank,
  Social,
  Facebook,
  Ig,
  Twitter,
  Youtube,
  AdminDiv,
  AdminImg,
  AdminName,
} from './styled'

const Admin = () => {
  return (
    <Container>
      <Header>
        <HeadImage
          src="https://qph.fs.quoracdn.net/main-qimg-a477b86f6aa9c1767332eae705e2fdb8"
          alt="image doesn't exist"
        />
        <ImageDiv>
          <Rank align="center">{'Rank: ???'}</Rank>
          <Social>
            <Facebook />
            <Ig />
            <Twitter />
            <Youtube />
          </Social>
        </ImageDiv>
        <AdminDiv>
          <AdminImg
            src="https://qph.fs.quoracdn.net/main-qimg-a477b86f6aa9c1767332eae705e2fdb8"
            alt="image doesn't exist"
          />
          <AdminName>Jack</AdminName>
        </AdminDiv>
      </Header>
    </Container>
  )
}

export default Admin
