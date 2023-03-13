export  const scrollToTop = (value=0) => {
  window.scrollTo({
    top: value,
    behavior: 'smooth'
  })
}