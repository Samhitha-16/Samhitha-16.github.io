
document.addEventListener('DOMContentLoaded', (event) => {
    const labels = document.querySelectorAll('.strength-card');

    labels.forEach(label => {
        label.addEventListener('click', (event) => {
            const input = document.querySelector(`#${label.getAttribute('for')}`);
            if (input) {
                input.checked = !input.checked;

                // Prevent the default label click behavior
                event.preventDefault();
            }
        });
    });
});

