const modificar = document.getElementById("modificar")
console.log(modificar);

document.addEventListener("keyup", (e)=>{
    console.log(e.code);
    console.log(e.key);

    if(e.key == "Backspace"){
        modificar.click()
    }  
  })
