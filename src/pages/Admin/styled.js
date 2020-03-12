import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`
export const HeadImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 20px;
`
export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10px;
  padding: 5px;
`
export const Rank = styled.p`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 5px;
`
export const Social = styled.div`
  background-color: #418def;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`
export const AdminDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
  padding: 5px;
`
export const AdminImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid #000;
`
export const AdminName = styled.p`
  color: #000;
  font-size: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`
export const Facebook = styled(FaFacebook)`
  font-size: 30px;
  padding: 10px;
`
export const Ig = styled(FaInstagram)`
  font-size: 30px;
  padding: 10px;
`
export const Twitter = styled(FaTwitter)`
  font-size: 30px;
  padding: 10px;
`
export const Youtube = styled(FaYoutube)`
  font-size: 30px;
  padding: 10px;
`
