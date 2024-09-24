/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

const RemindfulTheme = {
  dark: false,
  colors: {
    background: '#2E3440',
    primary: '#1B202B',
    accent: '#773CFF',
    text: '#fff',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'RemindfulTheme',
    themes: {
      RemindfulTheme
    }
  },
})
