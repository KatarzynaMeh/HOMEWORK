// 1 pruklad
// function toggle_theme() {
//     document.body.classList.toggle('is-dark');
// }

// 2
// function toggle_menu() {
//     const menu = document.querySelector('aside');
//     menu.classList.toggle('is-open');

// }

// 3
function calculate_area() {
    const radius = parseFloat(document.querySelector('#radius').value);
    const result = document.querySelector('#result');
   
    const area = Math.PI * radius ** 2;
    result.textContent = `Area of the circle: ${area}`;
}



