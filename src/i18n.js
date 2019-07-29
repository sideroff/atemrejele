import i18n from 'i18n-js'

import translations from './static/translations'

let locales = []

if (navigator && navigator.languages !== undefined) {
  locales = navigator.languages
}

i18n.locale = (locales && locales[0]) || 'bg'

i18n.fallbacks = true
i18n.translations = translations

export default i18n