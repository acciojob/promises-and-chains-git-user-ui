const age = document.getElementById("age");
const myname = document.getElementById("name");
const form = document.getElementById("myForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let inputAge = age.value.trim();
  let inputName = myname.value.trim();

  // Validation
  if (inputAge === "" || inputName === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise Logic
  promiseFunc(inputAge, inputName)
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
}

function promiseFunc(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

