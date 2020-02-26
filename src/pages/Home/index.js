import React from 'react'
import { FaRegListAlt } from 'react-icons/fa'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import {
  Component,
  Left,
  Mid,
  Right,
  Menu,
  LeftText,
  ContentBoxView,
} from './styled'
import Content from '../../components/home/Content'
import ContentBox from '../../components/home/ContentBox'
import NewPage from '../../components/home/NewPage'
import NameTag from '../../components/home/NameTag'
import TrendingBoard from '../../components/home/TrendingBoard'

const Home = ({ exampleStore }) => {
  console.log(exampleStore)

  return (
    <Component>
      <Left>
        <Menu>
          <NameTag />
        </Menu>
        <Menu>
          <TrendingBoard />
        </Menu>
        <Menu>
          <FaRegListAlt />
          <LeftText>Saved</LeftText>
        </Menu>
      </Left>
      <Mid>
        <ContentBoxView>
          {[1, 1, 1, 1].map((x, i) => (
            <ContentBox key={i} />
          ))}
        </ContentBoxView>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((x, i) => (
          <Content key={i} />
        ))}
      </Mid>
      <Right>
        <NewPage />
      </Right>
    </Component>
  )
}

export default compose(
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
