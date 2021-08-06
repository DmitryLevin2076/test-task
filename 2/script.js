const canvas = document.getElementById('canvas')
const circle = canvas.getContext('2d')
const triangle = canvas.getContext('2d')
const square = canvas.getContext('2d')
const rectangle = canvas.getContext('2d')



circle.arc(60, 60, 50, 0, 360);
circle.fill();

triangle.beginPath();
triangle.moveTo(260, 70);
triangle.lineTo(320, 10);
triangle.lineTo(380, 70);
// triangle.lineTo(250, 60);
triangle.closePath();
triangle.stroke();

square.rect(20, 300, 100, 75);
square.stroke();

rectangle.rect(300, 310, 60, 60);
rectangle.stroke();



























