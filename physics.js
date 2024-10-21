/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />



/* File for physics calculation, drawing, and graphing*/

const form = document.getElementById('form') // form for inputting the X, Y, HEIGHT, & ANGLE components
const button = document.getElementById('calculate') // button for calculation
const output = document.getElementById('graph')
const data = document.getElementById('data')
const remove = document.getElementById('remove')
let transition1
let transition2
let transition3
let transition4

let content = document.getElementById("content")

let dataTable = document.createElement("ul")

let data1 = document.createElement("li")
data1.id = "data1"

let data2 = document.createElement("li")
data2.id = "data2"

let data3 = document.createElement("li")
data3.id = "data3"

let data4 = document.createElement("li")
data4.id = "data4"

/* This function will check if a number is negative and return true or false */
function neg_test(number){
    if (number >= 0){
        return false
    }
    else{
        return true
    }
}

/* This function converts degrees to radians and returns that value */
function degreesToRadians(degrees){
    let radians = degrees * (Math.PI / 180)
    return radians
}

/* Will check for a submission on the page, and will begin the simulation once it is detected */
document.addEventListener('submit', (event) =>{


    event.preventDefault(); // Stops the page from reloading once submission is detected


    const GRAVITY = 9.81 
    const ANGLE = parseInt(document.getElementById('angle').value)
    const HEIGHT = parseInt(document.getElementById('height').value)

    let posistionListX = [] //plx, normalized X delta posistion values for graphing
    let posistionListY = [] //ply, normalized Y delta posistion values for graphing

    let posistionX = [] //px, This where the calculated delta X posistions are places
    let posistionY = [] //py, This where the calculated delta Y posistions are places

    let vectorListX = [] //vxl, normalized X force vectors for graphing
    let vectorListY = [] //vxy, normalized Y force vectors for graphing
    let time = []
    let iteration = []

    /* Initial X and Y vectors */
    let X = parseInt(document.getElementById('X').value)
    let Y = parseInt(document.getElementById('Y').value)

    /*Initializes variables*/
    let value
    let dt = 0 
    let pos_x
    let pos_y
    let vectorX = X * Math.cos(degreesToRadians(ANGLE)) //vx 
    let vectorY = Y * Math.cos(degreesToRadians(ANGLE)) //vy
    let end = 0

    /*calculates force and posistional vectors and appends the to their respective lists. 
    Iterates the y vector to account for gravity and adds dt (delta time) each iteration.
    This process is repeated 10000 times. */
    for (let i = 0; i < 10000; i++){
        time.push(dt)
        iteration.push(i)

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

    /*Before drawing, the program will set the speed to one and move to the corner of the window
    plus whatever the HEIGHT input is */
    setSpeed(1)
    goto(-400, -250 + HEIGHT);

        /*Draws out the posistion vectors one at a time, checking for negative values in order to rotate
        the turtle object properly*/
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

        /*I'm holding off on commenting this part until I complete the graph code*/
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


    Plotly.newPlot( output, [{
        x: posistionListX,
        y: posistionListY }], {
        margin: { t: 0 } } );
        
    
    transition1 = `PositionListX: ${posistionListX}`
    transition2 = `PositionListY: ${posistionListY}`
    transition3 = `VectorListX: ${vectorListX}`
    transition4 = `VectorListY: ${vector_y}`

});



data.addEventListener("click", (event) =>{
    
    

    content.appendChild(dataTable)

    dataTable.appendChild(data1)
    data1.textContent = transition1

    dataTable.appendChild(data2)
    data2.textContent = transition2

    dataTable.appendChild(data3)
    data3.textContent = transition3

    dataTable.appendChild(data4)
    data4.textContent = transition4



})

remove.addEventListener("click", (event) =>{
    data1.textContent = `PositionListX:`
    data2.textContent = `PositionListY:`
    data3.textContent = `VectorListX:`
    data4.textContent = `VectorListY:`
})
