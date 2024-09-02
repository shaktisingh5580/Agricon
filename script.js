document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('farmerRegistrationForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully');
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Input validation and styling
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateInput(this);
            }
        });
    });

    // Select styling
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                this.style.color = 'var(--text-color)';
            } else {
                this.style.color = 'var(--text-light)';
            }
        });
    });

    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    function validateInput(input)
