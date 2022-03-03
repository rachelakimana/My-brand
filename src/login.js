const email = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");
const loginbutn = document.getElementById("loginbutton");

loginbutn.addEventListener("click", (e) => {
  e.preventDefault();
  //get user info

  //sign the user in
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((cred) => {
      location.href = "/pages/dashboard.html";
    })
    .catch((err) => {
      alert(err.message);
    });
});

// //create new user
// auth
//   .createUserWithEmailAndPassword(email, password)
//   .then((cred) => {
//     const modal = document.querySelector(".loginform-container");
//     M.modal.getInstance(modal).close();
//     //reset form
//     loginForm.reset();
//     window.location.href = "/pages/dashboard.html";
//   })
//   .catch((err) => {
//     alert(err.message);
//   });
