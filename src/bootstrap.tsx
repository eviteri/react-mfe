import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const remoteMount = (el: HTMLElement) => {
  if (el) {
    const root = ReactDOM.createRoot(el)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals()
  }
}

// Running in isolation
const devRoot = document.getElementById('remote') as HTMLElement
if (devRoot) {
  remoteMount(devRoot)
}

const app = {
  remoteMount
}

export default app
