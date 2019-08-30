/* 
REQUIRMENTS OF WEBPAGE:
Charles Schwab -- Front End Developer Coding Assessment
- Build a responsive module on a webpage containing 4 square boxes with colors: red, green, blue, white.
- Each box has a maximum width of 230px, and the webpage has a maximum width of 980px.
- Each box contains a button, and when clicked changes the color of the other boxes to its color, except for the white box.
- The white box stays white, and resets all boxes to their original color.
*/

// This is an interesting little excercise. 
// There are a few ways to accomplish this...
// - Use vanilla javascript and add the onclick attribute to HTML element
// - Use vanilla javascript to point to methond on click. Execute javascript method.
// - Use vanilla javascript to have an event listener listen to a click for associated ID or class and execute code.
// - Use a switch case statment 
// - Use jquery to make a use case for each situation


'use strict';
const box = $(".change");
const button = $(".card-footer");

  function dothis(color) {
    switch(color) {
          case "red":
                button.delegate("a", "click",function(){
                    box.css("background-color", "red");
                });
              break;
          case "green":
                button.delegate("a", "click",function(){
                    box.css("background-color", "green");
                });
              break;
          case "blue":
                button.delegate("a", "click", function(){
                    box.css("background-color", "blue");
                })
              break;
          case "default":
                button.delegate("a", "click",function(){
                    $(".red").css("background-color", "red");
                    $(".green").css("background-color", "green");
                    $(".blue").css("background-color", "blue");
                });
              break;	
      }
  }

//   $(document).ready(function(){
//     $(".card-footer").delegate("a", "click",function(){
//       $(".red").css("background-color", "red");
//       $(".green").css("background-color", "red");
//       $(".blue").css("background-color", "red");
//     });
//   });