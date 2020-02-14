import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/common/Navbar'
// import Footer from './components/common/Footer'
import RouterView from './routes'

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #141f27;
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
