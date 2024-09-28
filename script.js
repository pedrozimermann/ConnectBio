function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");

const img = document.querySelector("img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Avatar Light");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Avatar");
  }



  //pegar a tag img


  //substituir o src da imagem
  //se tiver light mode, adicionar a imagem light
  //se não tiver light mode, adicionar a imagem normal
}
