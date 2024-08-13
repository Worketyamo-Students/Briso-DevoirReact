import ReactDOM from 'react-dom/client'
import App from './pages/home'
import "./globals.css"
import { ThemeProvider } from './components/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
  <App />
</ThemeProvider>
)
