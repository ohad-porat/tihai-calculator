import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import TopBar from "./layout/TopBar"
import LandingPage from "./layout/tihaiCalculator/TihaiLandingPage"
import AboutUs from "./layout/AboutUs"
import WhatIsTihai from "./layout/WhatIsTihai"
import MeshuggahMainPage from "./layout/meshuggahCalculator/MeshuggahMainPage"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch(() => {
        setCurrentUser(null)
      })
  }, [])
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/what-is-tihai" component={WhatIsTihai} />
        <Route exact path="/meshuggah-calculator" component={MeshuggahMainPage} />
      </Switch>
    </Router>
  )
}

export default hot(App)
