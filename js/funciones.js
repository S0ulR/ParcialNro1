window.onload = function(){
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario); 
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
            // Input
            var nombre = document.getElementById('nombreInput');

            // Error message
            var nombreError = document.getElementById('nombreError');

            // Add event listeners
            nombre.addEventListener('blur', validateNombre);
            nombre.addEventListener('focus', clearNombreError);

            // Clear error function
            function clearNombreError(e) {
                nombreError.classList.add('hiddenError');
        }

        // Validation function
        function validateNombre(e) {
            var x = nombre.value;
            if(x.length < 3) {
          nombreError.classList.remove('hiddenError');
        }
        }
        this.submit();
    }
}