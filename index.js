var buttons = document.querySelectorAll("button");

for(i = 0; i < buttons.length;i++){
    buttons[i].addEventListener("click",function(){
      keyboardActions(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });

  }

document.addEventListener("keydown",function(){
  keyboardActions(event.key);
  buttonAnimation(event.key);
});

function keyboardActions(key){
  switch (key) {
    case "w":
      console.log("w is clicked");
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      console.log("q is clicked");
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      console.log("s is clicked");
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      console.log("d is clicked");
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      console.log("j is clicked");
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "k":
      console.log("key is clicked");
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "l":
      console.log("l is clicked");
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
/*function handleClick(){

  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}*/
