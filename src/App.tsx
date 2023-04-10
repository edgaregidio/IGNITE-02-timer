import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
        </CyclesContextProvider>
      </ThemeProvider>
  )
}
