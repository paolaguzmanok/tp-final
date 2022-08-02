function validar(){
    var name,email,asunto,mensaje;
    name =document.getElementById("name").value;
    email=document.getElementById("email").value;
    asunto=document.getElementById("asunto").value;
    mensaje=document.getElementById("mensaje").value;
    if(name===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if( email===""){
        alert("No ingreso el correo")
    }
    else if( asunto===""){
        alert("No ingreso el asunto")
    }
    else if(mensaje===""){
        alert("No ingreso el mensaje")
    }
    else if(name.length<3 ){
        aleirt("El nombre es muy corto")
    }
        
    }

