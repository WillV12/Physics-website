/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/



const reset = document.getElementById('reset')
const colorButton = document.getElementById('colorButton')
const random = document.getElementById("randomize")

reset.addEventListener('click', (event) =>{

    clear()
    color('#000000')
    alert('Window was reset')


});

colorButton.addEventListener('click', (event) =>{
    colors = document.getElementById('color_selector').value
    color(colors)
    alert("Color has been set to " + colors )
})


const hexList = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

random.addEventListener('click', (event) =>{

    let colors = "#"

    for (let i = 0; i < 6; i++){
        index = parseInt(Math.random() * hexList.length)
        colors += hexList[index]}
    
    color(colors)
    alert("Color has been set to " + colors )
})

    