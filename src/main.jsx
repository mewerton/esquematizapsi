import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider  theme={theme}>
      <GlobalStyles/>
      <HashRouter>
        <Details />
      </HashRouter>
     </ThemeProvider>
  </React.StrictMode>,
)
