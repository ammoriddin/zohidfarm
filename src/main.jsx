import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from "i18next"
import enTranslation from "./translations/en/eng.json"
import ruTranslation from "./translations/ru/ru.json"
import uzTranslation from "./translations/uz/uz.json"
import { I18nextProvider } from 'react-i18next'

i18next.init({
  intorpalation: {escapeValue: false},
  lng: 'uz',
  resources: {
    en: {
      global: enTranslation
    },
    ru: {
      global: ruTranslation
    },
    uz: {
      global: uzTranslation
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
