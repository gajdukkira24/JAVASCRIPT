const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');

const markup = colorPickerOptions.map(option =>{
    return `<button class="colorPickerOption" style="background-color: ${option.color};">${option.label}</button>`
}).join("")

containerEl.innerHTML = markup;

console.log(markup);