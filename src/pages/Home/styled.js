import styled from 'styled-components'

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
  max-width: 1250px;
  margin: auto;
`
export const Left = styled.div`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
`
export const Mid = styled.div`
  width: 650px;
  padding: 10px;
`
export const Right = styled.div`
  width: 300px;
  padding: 10px;
`
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  color: #fff;
  cursor: pointer;
`
export const LeftText = styled.h2`
  font-size: 20px;
  font-weight: 900;
  padding: 10px;
  color: #fff;
`
export const ContentBoxView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
