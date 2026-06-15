import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import es from './locales/es.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
    es
  }
})

export default i18n
