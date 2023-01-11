/*const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup",(e)=>{
  console.log(e.key);
  console.log(e.code);

  if(e.code == "Digit1"){
    console.log("Abrir navegação secundaria")
    navPerfil.style.display = "block"
  }
})*/
//usandoif e mudando a sequecia dos codigos


/*const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup",(e)=>{
  console.log(e.key);
  console.log(e.code);
  if(navPerfil.style.display == "block"){
    if(e.code == "Digit1"){
      linkPerfilDados.click()
    }
  } else if(e.code == "Digit1"){
    console.log("Abrir navegação secundaria")
    navPerfil.style.display = "block"
  }
})*/


const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")



linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

document.addEventListener("keyup",(e)=>{
  console.log(e.key);
  console.log(e.code);
  if(navPerfil.style.display == "block"){
    if(e.code == "Digit1"){
      linkPerfilDados.click()
    }
  } else if(e.code == "Digit1"){
    console.log("Abrir navegação secundaria")
    navPerfil.style.display = "block"
  }
})
window.getElementById("keypress", (e)=>{
  console.log(e.code);

})



