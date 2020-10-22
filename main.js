// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likes = document.querySelectorAll(".like-glyph");
  const errorMessage = document.querySelector("#modal-message");
  likes.forEach((like) => {
    like.addEventListener("click", (e) => {
      mimicServerCall()
        .then((response) => {
          if (like.innerHTML === EMPTY_HEART) {
            like.className = "activated-heart";
            like.innerHTML = FULL_HEART;
          } else {
            like.className = "like-glyph";
            like.innerHTML = EMPTY_HEART;
          }
        })
        .catch(function (error) {
          errorMessage.className = "unhidden";
          errorMessage.innerHTML = console.error("error");
          setTimeout(() => {
            errorMessage.className = "hidden";
          }, 500);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
