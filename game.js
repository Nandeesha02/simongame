var buttonColours = ["red" , "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattren = [];
var started = false;
var level = 0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattren.push(userChosenColor);
  // console.log(userClickedPattren);
  // $(this).fadeIn(100).fadeOut(100).fadeIn(100);
  // var audio1 = new Audio("sounds/" + userChosenColor + ".mp3");
  // audio1.play();
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattren.length-1);
});


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattren[currentLevel]){
    console.log("success");

  if(userClickedPattren.length===gamePattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}
  else{
console.log("worng");
    playSound("worng");
    $("body").addClass("game-over");

setTimeout(function(){
  $("body").removeClass("game-over")
},2000);
$("#level-title").text("Game over press any key to continue");
 startOver();

  }
}




function nextSequence() {
  userClickedPattren = [];
  level++;
  $("#level-title").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  // audio.play();

  playSound(randomChosenColour);

// alert(randomChosenColour);
}
function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");
setTimeout(function(){
  {
        $("#"+ currentColour).removeClass("pressed");
    }
},100);
}
function startOver(){
  level = 0;
  started = false;
  gamePattern = [];
}
