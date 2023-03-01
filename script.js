    document.getElementById('submitButton').addEventListener('click', submitForm);
// Detener ir arriba cuando se envia el formulario
    function submitForm(event) {
    event.preventDefault(); 

    
// Captar los valores del formulario
    let Nombre = document.getElementById('Nombre').value;
    let Email = document.getElementById('Email').value;
    let Mensaje = document.getElementById('Mensaje').value;
  
// Mostrar el mensaje de agradecimiento
    let messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';


// Mostrar los valores en la consola
    console.log('Nombre: ' + Nombre);
    console.log('Email: ' + Email);
    console.log('Mensaje: ' + Mensaje);
  }
  
  
  
