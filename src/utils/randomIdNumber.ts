/**
 * @deprecated This method should be replaced with 'useId' react hook, maintained for compatibility purpose
 * @returns {string}
 */
export default function randomIdNumber(): string {
  return `${Math.floor(Math.random() * 1200 * Math.random() * 100)}`;
}
