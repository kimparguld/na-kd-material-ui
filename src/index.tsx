import React from 'react'
import ReactDOM from 'react-dom'
import SiteLayout from './siteLayout'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import { setAuthTokens } from './services/authService'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SiteLayout />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
setAuthTokens()
reportWebVitals()
