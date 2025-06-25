import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ApplicationTheme } from './context/ApplicationTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ApplicationTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
