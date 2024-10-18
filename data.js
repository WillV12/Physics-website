

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
    

        /*Draws out the posistion vectors one at a time, checking for negative values in order to rotate
        the turtle object properly*/
        

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


    let content = document.getElementById("content")

    let data1 = document.createElement("p")
    let data2 = document.createElement("p")
    let data3 = document.createElement("p")
    let data4 = document.createElement("p")
    
    content.appendChild(data1)
    data1.id = "data1"
    content.appendChild(data2)
    data2.id = "data2"
    content.appendChild(data3)
    data3.id = "data3"
    content.appendChild(data4)
    data4.id = "data4"

    data1.textContent = `VectorListX: ${vectorListX}`

