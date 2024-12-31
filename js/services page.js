let pr = document.querySelector('.products');

function right(){
    pr.scrollBy({
        left: 300,
        behavior:"smooth",
    })
}
function left() {
    pr.scrollBy({
        left: -300,
        behavior: "smooth",
    })
}
const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } 
      
      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.classList.add('is-invalid');
      } else {
        confirmPassword.setCustomValidity("");
        confirmPassword.classList.remove('is-invalid');
      }

      form.classList.add('was-validated');
    });