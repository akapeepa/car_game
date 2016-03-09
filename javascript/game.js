$(document).ready(function() {
  var my_car = $('#p1'); //fetching car1
  var enemy_car =  $("#p2"); //fetching car2
  var enemy_position = -10;  // p2 car position y axis;
  var enemy_x = 10*Math.floor(5*Math.random());
  enemy_car.css("left", enemy_x + "vmin");
  var bottom = 0; // my car position y axis;
  var position = 0; //my car position x axis;
  var score = 0;
  $(document).bind('keyup', 'right', function() {
    if(position < 40) {
      position += 10;//incrementing x axis;
      my_car.css('left', position + "vmin");
    }
  })
  $(document).bind('keyup', 'left', function() {
    if(position > 0){
      position -= 10; //incrementing x axis
      my_car.css('left', position + "vmin");
    }
  })
  $(document).bind('keyup', 'up', function() {
    if(bottom < 80){
      bottom +=10 ; //incrementing x axis
      my_car.css('bottom', bottom + "vmin");
    }
  })

  $(document).bind('keyup', 'down', function() {
    if(bottom > 0 ){
      bottom -= 10; //incrementing y axis
      my_car.css('bottom', bottom + "vmin");
    }
  })

  var a = setInterval(function()
  {
    if (enemy_position < 100) {
      // Get the top position of your car
      // Get the top position of enemy car
      // Add the height of enemy car to the top position and check if its
      // equal to your car's top position
      // If its equal, you have a collision
      if(enemy_position > 60 && enemy_x == position){
        clearInterval(a); //clearInterval takes an variable thats why we created a var a ; to sto the car on collision.
      }
      score++;
      $("#score").html(Math.floor(score));
      enemy_position += 1;
      enemy_car.css("top", enemy_position +"vmin");
    } else {
      enemy_position = -20;
      enemy_x = 10*Math.floor(5*Math.random());
      enemy_car.css("left", enemy_x + "vmin");
    }
  }, 30);
});
