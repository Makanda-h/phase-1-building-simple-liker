// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(span => span.addEventListener('click', handleHeart));
function handleHeart(e) {
  mimicServerCall()
  .then(() => handleSuccess(e.target))
  .catch(handleError);
}
//handle success fucntion
function handleSuccess(target) {
  if (target.textContent === EMPTY_HEART){
    target.textContent = FULL_HEART;
    target.classList.add("activated-heart");
  }else {
    target.textContent = EMPTY_HEART;
    target.classList.remove('actiavted-heart');
  }
}

//handle error function
function handleError(message){
  modal.classList.remove('hidden');
  modalMessage.textContent = message;
  setTimeout(() => modal.classList.add('hidden'), 3000)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
