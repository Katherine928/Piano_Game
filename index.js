for (var i = 0; i < document.querySelectorAll(".piano").length; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
};

document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "c":
      var audio = new Audio('sounds/c.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/d.mp3');
      audio.play();
      break;
    case "e":
      var audio = new Audio('sounds/e.mp3');
      audio.play();
      break;
    case "f":
      var audio = new Audio('sounds/f.mp3');
      audio.play();
      break;
    case "g":
      var audio = new Audio('sounds/g.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/a.mp3');
      audio.play();
      break;
      case "b":
      var audio = new Audio('sounds/b.mp3');
      audio.play();
        break;
    default: console.log(buttonInnerHTML);
  };
}

function buttonAnimation(currentKey) {

  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  },100);
};
