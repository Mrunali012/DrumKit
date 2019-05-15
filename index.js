var n= document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handle);
}

document.addEventListener("keydown",press);
//button press
function handle()
{

  var inner= this.innerHTML;
  makeSound(inner);
  buttonAni(inner);
  }
  //keyboard press
function press(event)
{
    makeSound(event.key);
}
//make animation
function buttonAni(currentkey)
{
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(removec);
  function removec()
  {
    activeButton.classList.remove("pressed",100);
  }
}
//make sound
function makeSound(key)
{
  switch (key) {
    case "w":
    var audio =new Audio("tom-1.mp3");
    audio.play();
      break;
      case "a":
      var audio =new Audio("tom-2.mp3");
      audio.play();
        break;
        case "s":
        var audio =new Audio("tom-3.mp3");
        audio.play();
          break;
          case "d":
          var audio =new Audio("tom-4.mp3");
          audio.play();
            break;
            case "j":
            var audio =new Audio("snare.mp3");
            audio.play();
              break;
              case "k":
              var audio =new Audio("crash.mp3");
              audio.play();
                break;
                case "l":
                var audio =new Audio("kick-bass.mp3");
                audio.play();
                  break;
    default:

  }
}
