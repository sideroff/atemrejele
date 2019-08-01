import i18n from 'i18n'

export const randomIntByMinMax = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const projectNamePlaceholders = [
  i18n.t('lemonade-stand'),
  i18n.t('sand-castle'),
  i18n.t('car-shop'),
  i18n.t('todos'),
  i18n.t('video-game'),
  i18n.t('my-new-project'),
  i18n.t('bucket-list'),
  i18n.t('movies-to-watch'),
]