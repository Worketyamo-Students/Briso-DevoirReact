import ReactDOM from 'react-dom/client'
import App from './pages/home'
import "./globals.css"
import { ThemeProvider } from './components/theme-provider'

const root = document.getElementById('root')! //accessing that main page by it's id to display
const virtualDOM = ReactDOM.createRoot(root) //creating the virtual DOM of React 
virtualDOM.render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
   <App />         {/*  The principal component of the website */}
</ThemeProvider>
)
