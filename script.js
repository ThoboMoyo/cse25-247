console.log("JavaScript is connected!"); 
// Example starter JavaScript for disabling form submissions if there are invalid fields
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
const form = document.getElementById("paymentForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop refresh

    document.getElementById("successPopup").style.display = "flex";
  });
}

function goHome() {
  window.location.href = "index.html";
}

