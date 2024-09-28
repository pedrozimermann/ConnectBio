function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("img")

  if (html.classList.contains("light")) {
    // Remover a classe 'light' com animação
    requestAnimationFrame(() => {
      html.classList.remove("light")
      img.setAttribute("src", "./assets/avatar.jpg")
      img.setAttribute("alt", "Avatar")
    })
  } else {
    // Adicionar a classe 'light' com animação
    requestAnimationFrame(() => {
      html.classList.add("light")
      img.setAttribute("src", "./assets/avatar-light.jpg")
      img.setAttribute("alt", "Avatar Light")
    })
  }
}
