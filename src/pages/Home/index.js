import React from 'react'
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaRegBookmark,
  FaRegListAlt,
} from 'react-icons/fa'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Component, Left, Mid, Right, Menu, LeftText } from './styled'
import Content from '../../components/home/Content'

const Home = ({ exampleStore }) => {
  console.log(exampleStore)

  return (
    <Component>
      <Left>
        <Menu>
          <FaHome />
          <LeftText>หน้าแรก</LeftText>
        </Menu>
        <Menu>
          <FaHashtag />
          <LeftText>สำรวจ</LeftText>
        </Menu>
        <Menu>
          <FaBell />
          <LeftText>การแจ้งเตือน</LeftText>
        </Menu>
        <Menu>
          <FaRegBookmark />
          <LeftText>บุ๊คมาร์ค</LeftText>
        </Menu>
        <Menu>
          <FaRegListAlt />
          <LeftText>รายชื่อ</LeftText>
        </Menu>
      </Left>
      <Mid>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((x, i) => (
          <Content key={i} />
        ))}
      </Mid>
      <Right></Right>
    </Component>
  )
}

export default compose(
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
