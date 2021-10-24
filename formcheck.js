(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//   });
  
//   function validarFormulario(evento) {
//     evento.preventDefault();
//     var usuario = document.getElementById('usuario').value;
//     if(usuario.length == 0) {
//       alert('No has escrito nada en el usuario');
//       return;
//     }
//     var clave = document.getElementById('clave').value;
//     if (clave.length < 6) {
//       alert('La clave no es válida');
//       return;
//     }
//     this.submit();
//   }