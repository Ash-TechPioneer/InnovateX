document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        let valid = true;

        if (!emailInput.value) {
            emailInput.classList.add('is-invalid');
            valid = false;
        } else {
            emailInput.classList.remove('is-invalid');
        }

        if (!passwordInput.value) {
            passwordInput.classList.add('is-invalid');
            valid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        if (valid) {
            alert('Form submitted successfully!');
            // You can replace the alert with actual form submission logic
            // e.g., send data to the server
        }
    });
});

