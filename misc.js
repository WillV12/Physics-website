/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/



const reset = document.getElementById('reset')
const colorButton = document.getElementById('colorButton')

reset.addEventListener('click', (event) =>{

    clear()
    color('#000000')
    alert('Window was reset')


});

colorButton.addEventListener('click', (event) =>{
    colors = document.getElementById('color_selector').value
    color(colors)
    alert("Color has been set to "+ colors )
})

