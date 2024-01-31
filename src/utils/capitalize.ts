/**
 * @param {string} text
 * @returns {string}
 */
const capitalize = (text: string): string => {
  if (typeof text !== 'string') throw new TypeError('Only string type allowed')
  if (text.length === 0) throw new Error('Text must have at least 1 character')
  const words = text.split(' ')
  return words.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')
}

export default capitalize
