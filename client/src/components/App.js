import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
import TopBar from "./layout/TopBar"
import TihaiMainPage from "./layout/tihaiCalculator/TihaiMainPage"
import AboutUs from "./layout/AboutUs"
import WhatIsTihai from "./layout/WhatIsTihai"
import LandingPage from "./layout/LandingPage"
import MeshuggahMainPage from "./layout/meshuggahCalculator/MeshuggahMainPage"

const App = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/tihai-calculator" component={TihaiMainPage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/what-is-tihai" component={WhatIsTihai} />
        <Route exact path="/meshuggah-calculator" component={MeshuggahMainPage} />
      </Switch>
    </Router>
  )
}

export default hot(App)
