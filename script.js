const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".error");

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const email = input.value;

  validateEmail(email);

  input.value = "";
});

function validateEmail(emailAddress) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

  if (emailAddress.length === 0) {
    message.textContent = "Whoops! It looks like you forgot to add your email";
    input.style.border = "1px solid red";
    message.style.color = "red";
    message.style.display = "block";
    return;
  }

  if (emailAddress.match(pattern)) {
    message.textContent = "Success";
    input.style.border = "1px solid green";
    message.style.color = "green";
    message.style.display = "block";
  } else {
    message.textContent = "Please provide a valid email address";
    input.style.border = "1px solid red";
    message.style.color = "red";
    message.style.display = "block";
  }
}
