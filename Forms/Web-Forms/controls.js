const max = document.querySelector('#max-invite');
const output = document.querySelector('.invite-output');

output.textContent = max.value;

max.addEventListener('input', () => {
    output.textContent = max.value;
});