

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; // stops thef func from running all together
  key.classList.add('playing');// add playing to class list (also have classList.remove and .toggle) 
  audio.currentTime = 0; // rewinds audio to start
  audio.play();

}

// now need to remove the class.
function removeTransition(e) {
  
  if(e.propertyName !== 'transform') return; // skip it if its not a transform
  this.classList.remove('playing');
  
}

 const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// now need to actually make removeTransition function (did this above)

window.addEventListener('keydown', playSound);
// finally add the event listener at the bottom here, so that when something is keyed down, it will fire our function playSound