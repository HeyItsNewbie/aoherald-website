const changeWallPaper = () => {
  const styleElem = document.head.appendChild(document.createElement('style'))
  const bg = '/inc/images/ao-wp-' + (Math.round(Math.random() * 8)) + '.jpeg'
  styleElem.innerHTML = 'body::after {background-image: url(' + bg + ");margin:auto; content: ''; background-size: cover; opacity: 0.6; top: 0; left: 0; bottom: 0; right: 0; position: absolute; z-index: -1}"
}
