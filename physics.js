/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/


const form = document.getElementById('form')
const button = document.getElementById('calculate')

function neg_test(number){
    if (number >= 0){
        return false
    }
    else{
        return true
    }
}


function input(string){
    user_input = prompt(string)
    return user_input
}


function degreesToRadians(degrees){
    let radians = degrees * (Math.PI / 180)
    return radians
}

document.addEventListener('submit', (event) =>{

    event.preventDefault();

    const GRAVITY = 9.81   
    const ANGLE = parseInt(document.getElementById('angle').value)
    const HEIGHT = parseInt(document.getElementById('height').value)

    let posistionListX = [] //plx
    let posistionListY = [] //ply

    let posistionX = [] //px
    let posistionY = [] //py

    let vectorListX = [] //vxl
    let vectorListY = [] //vxy
    let time = []

    let X = parseInt(document.getElementById('X').value)
    let Y = parseInt(document.getElementById('Y').value)

    let value
    let dt = 0 
    let pos_x
    let pos_y
    let vectorX = X * Math.cos(degreesToRadians(ANGLE)) //vx 
    let vectorY = Y * Math.cos(degreesToRadians(ANGLE)) //vy
    let end = 0

    for (let i = 0; i < 10000; i++){
        time.push(dt)

        ix = X + vectorX * dt
        iy = Y + vectorY * dt
        vectorListX.push(ix)
        vectorListY.push(iy)

        vectorY = vectorY -0.5 * GRAVITY * dt
        pos_x = ix * dt 
        pos_y = iy * dt

        posistionX.push(pos_x/10)
        posistionY.push(pos_y/10)
        dt += 0.0001

            var sum = posistionY.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              if (sum < (0-HEIGHT) && end == 0){
                end = i
              }
    }


    setSpeed(1)
    goto(-250, -250 + HEIGHT);

    
        for (let index = 0; index < end; index++){
            right(90)
            forward(posistionX[index])
            left(90)
            if (neg_test(posistionY[index]) == false){
                forward(posistionY[index])
            } 
            else {
                value = posistionY[index]
                value *= -1
                right(180)
                forward(value)
                left(180)
            }
             
            
        }


            
        


    for (let index = 0; index < end; index++){
        let value = posistionX[index] *20
        posistionListX.push(value)
    }
    for (let index = 0; index < end; index++){
        if (neg_test(posistionY[index]) == true){
            let value = (posistionY[index] * -1) * 20 
            posistionListY.push(value)       
        } else{
            let value = (posistionY[index]) * 20
            posistionListY.push(value)
        }
        
    }

    let vector_y = []
    for (let index = 0; index < vectorListY.length; index++){
        if (neg_test(vectorListY[index]) == true){
            let value = vectorListY[index] * -1
            vector_y.push(value)
        } else{
            let value = vectorListY[index]
            vector_y.push(value)
        }
    }
});