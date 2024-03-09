const MILISECONDS = 1000

const DEFAULT_LOCALE = 'ua-UK'

const DEFAULT_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

export const formatDate = (date, locale = DEFAULT_LOCALE, options = DEFAULT_OPTIONS) =>
  new Date(date).toLocaleDateString(locale, options)

export const createDate = () => new Date().toLocaleDateString(DEFAULT_LOCALE, DEFAULT_OPTIONS)

export const getDateNowTimestamp = () => Date.now()

export const dateToMiliseconds = (date) => date * MILISECONDS
