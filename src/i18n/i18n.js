import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export async function loadLanguage(lng) {
  const translations = await import(`../locales/${lng}/translation.json`)
  i18n.addResourceBundle(lng, 'translation', translations.default)
}

export default i18n
