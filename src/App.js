import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/common/Navbar'
// import Footer from './components/common/Footer'
import RouterView from './routes'

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background-color: #16202A;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Navbar />
        <Route
          component={() => {
            window.scrollTo(0, 0)
            return null
          }}
        />
        <RouterView />
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
