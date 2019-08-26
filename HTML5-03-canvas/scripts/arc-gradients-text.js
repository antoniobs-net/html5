/**
 * (c) Copyright 2004-2019 Antonio Bueno  https://www.antoniobs.net
 */

 function ArcGradientsText() {
    var canvas, context;
    canvas = document.getElementById('canvas');
    
    if (Modernizr.canvas) {
    
      context = canvas.getContext('2d');
    
      var g1 = context.createRadialGradient(
          160, // X coordinate of grad. start
          120, // Y coordinate of grad. start
          0,   // Radius of the start circle
          320, // X coordinate of grad. end
          220, // Y coordinate of grad. end
          300);// Radius of the end circle
      g1.addColorStop(0, '#ffffff');
      g1.addColorStop(1, '#999999');
    
      // base circle
      context.lineWidth = 0;
      context.strokeStyle = '#000000';
      context.fillStyle = g1;
      context.beginPath();
      context.arc(
          180,        // X coordinate of arc start
          180,        // Y coordinate of arc start
          160,        // Radius
          0,          // Start angle
          Math.PI * 2,// End angle
          true);      // Anticlockwise
    
      context.fill();
    
      var g2 = context.createRadialGradient(360,
                                            320,
                                            0,
                                            260,
                                            220,
                                            200);
    
      g2.addColorStop(0, '#ffffff');
      g2.addColorStop(1, '#999999');
    
      // inner circle
      context.fillStyle = g2;
      context.beginPath();
      context.arc(180,
                  180,
                  130,
                  0,
                  Math.PI * 2,
                  true);
      context.fill();
    
      context.fillStyle = '#ffffff';
      context.font = '280px Arial';
      context.fillText('C', 80, 280);
    }
    
 }