const slider = document.querySelector("#slider");
const output = document.querySelector('.price-output');

output.textContent = slider.value;

slider.addEventListener("input", () => {
    output.textContent = slider.value;
});