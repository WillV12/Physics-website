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


showGrid(50); 
setSpeed(200);

width(5);
color("blue");
forward(120);

width(1);
left(65);
color("red");
forward(150);

goto(184,-208);
width(2);
right(100);
color("green");
forward(150);