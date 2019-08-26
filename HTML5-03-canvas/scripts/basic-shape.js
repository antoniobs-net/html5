/**
 * (c) Copyright 2004-2019 Antonio Bueno  https://www.antoniobs.net
 */

function BasicShape() {
    var canvas, context;
    canvas = document.getElementById('canvas');

    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(75, 50);
      context.lineTo(75, 100);
      context.lineTo(25, 100);
      context.fill();
    }
}