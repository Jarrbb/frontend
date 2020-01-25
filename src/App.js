import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// import Navbar from './components/common/Navbar'
// import Footer from './components/common/Footer'
import RouterView from './routes'

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
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
