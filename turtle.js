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


function neg_test(number){
    if (number >= 0){
        return false
    }
    else{
        return true
    }
}


function degreesToRadians(degrees){
    let radians = degrees * (Math.PI / 180)
    return radians
}

document.addEventListener('submit', (event) =>{

    const GRAVITY = 9.81   
    const ANGLE = document.getElementById('angle').value
    const HEIGHT = document.getElementById('height').value

    let posistionListX = [] //plx
    let posistionListY = [] //ply

    let posistionX = [] //px
    let posistionY = [] //py

    let vectorListX = [] //vxl
    let vectorListY = [] //vxy
    let time = []

    let X = document.getElementById('X').value
    let Y = document.getElementById('Y').value

    let dt = 0 
    let pos_x
    let pos_y
    let vectorX = X * Math.cos(degreesToRadians(ANGLE)) //vx 
    let vectorY = Y * Math.cos(degreesToRadians(ANGLE)) //vy

    for (let i = 0; i < 10000; i++){
        time.push(dt)

        ix = X + vectorX * dt
        iy = Y + vectorY * dt
        vectorListX.push(ix)
        vectorListY.push(iy)

        vectorY = vectorY - 0.5 * GRAVITY * dt
        pos_x = ix * dt
        pos_y = iy * dt

        posistionX.push(pos_x/20)
        posistionY.push(pos_y/20)
        dt += 0.0001
    }
    setSpeed(200)
    showGrid(20);
    penup();
    goto(-628, -304 + HEIGHT);
    pendown();

    let end = ''
    for (let index = 0; index < posistionX.length; index++){
        forward(posistionX[index])

        if (neg_test(posistionY[index]) == false){
            left(90)
            forward(posistionListY[index])
            right(90)
        } else {
            let value = parseFloat(posistionY[index])
            value *= -1
            right(90)
            forward(value)
            left(90)
        }

        if (ycor() <= -304 && index > 5){
            end = index
            break
        }
    }

    for (let index = 0; index < posistionX.length; index++){
        let value = posistionX[index] *20
        posistionListX.push(value)
    }

    for (let index = 0; index < posistionListY.length; index++){
        if (neg_test(posistionY[index]) == true){
            value = (posistionY[index] * -1) * 20 
            posistionListY.push(value)       
        } else{
            value = (posistionY[index]) * 20
            posistionListY.push(value)
        }
        
    }

    let vector_y
    for (let index = 0; index < vectorListY.length; index++){
        if (neg_test(vectorListY[index]) == true){
            value = vectorListY[index] * -1
            vector_y.push(value)
        } else{
            value = vectorListY[index]
            vector_y.push(value)
        }
    }
});