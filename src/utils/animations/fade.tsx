export default (id: string, fadeIn?: boolean): void => {
  const quote = document.getElementById(id),
    cssAnimation = fadeIn
      ? 'fadeIn 1s ease-in forwards'
      : 'fadeOut 0.5s ease-in forwards'
  if (quote) quote.style.animation = cssAnimation
}
