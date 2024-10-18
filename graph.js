import {posistionListX, posistionListY, vectorListX, vector_y, iteration} from './physics.js';

output = document.getElementById('graph')
graphButton = document.getElementById('graphButton')



graphButton.addEventListener('click', (event) =>{
    event.preventDefault(); // Stops the page from reloading once submission is detected
    Plotly.plot( output, [{
        x: iteration,
        y: vector_y }], {
        margin: { t: 0 } } );
})


