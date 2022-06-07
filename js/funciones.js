window.onload = function(){

  const nombre = document.getElementById('nombreInput');
  const apellido = document.getElementById('apellidoInput');  
  const email = document.getElementById('emailInput').value;  
  const edad = document.getElementById('edadInput');  
  const form = document.getElementById('formulario');  
  const parrafo = document.getElementById('warnings');  
    
  form.addEventListener('submit',e=>{
    e.preventDefault();
    let warnings = "";  
    let enviar = false; 
    parrafo.innerHTML = ""  
    let regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;  
     
    //********************Valida campo Nombre********************  
    if(nombre.value.length < 3){  
      warnings +='El nombre debe contener al menos 3 caracteres<br>'  
      enviar = true;
    }   
    else{
      return true;
    }   
  
    //********************valida campo Apellido********************  
    if(apellido.value.length < 3){  
      warnings +='El apellido debe contener al menos 3 caracteres<br>'  
      enviar = true;  
    }
    else{
      return true;
    }   
  
    //********************Valida e-mail********************  
    if(!regexEmail.exec(email)){
        warnings +='Debe ingresar una dirección de correo válida<br>'  
      enviar = true;
    }
    else{
      return true;
    }   
  
    //********************Valida edad******************** 
    //Valida que se haya ingresado solo numeros
    if(isNaN(edad)){
      warnings += 'Debe ingresar un valor numérico<br>'  
      enviar = true;  
    }
    //Valida el rango
    else if(edad<0 && edad>100){
      warnings += 'La edad introducida no es válida<br>'  
      enviar = true;
    }
    else{
      return true;
    }
  
    //********************Valida género********************  
    function comprobarRadio(radio){  
      for(i = 0;i < radio.length;i++)  
      {  
        if(radio[i].checked)  
        {  
          return false;  
        }  
      }  
      return true;  
    }
  
    if(comprobarRadio(form.genero)){  
      warnings += 'Debe seleccionar un género<br>'  
      enviar = true;  
    }   
  
    //********************Valida la selección de al menos 1 checkbox********************
    //var isChecked = document.getElementByName('test').checked;
    //if(isChecked){
    //  return true;
    //}
    //else{
    //  warnings += 'Debe seleccionar al menos un tema de interés<br>'  
    //  enviar = true;  
    //}   

    //elemento = document.getElementById("campo");
    //if( !elemento.checked ) {
    //  warnings += 'Debe seleccionar al menos un tema de interés<br>'  
    //  enviar = true;
    //}
    //else{
    //  return true;
    //}

    //********************Valida selección de país********************  
    indice = document.getElementById("pais").selectedIndex;  
      if( indice == null || indice == 0 ){  
        warnings += 'Debe seleccionar un país de la lista<br>'  
        enviar = true;  
      }  
      if(enviar){  
        parrafo.innerHTML = warnings  
      }  
      else{
        parrafo.innerHTML = "Registro exitoso, muchas gracias."  
      }  
  })
}

