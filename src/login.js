const auth = firebase.auth();
//listen for auth staus change
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user logged in: ", user);
  } else {
    console.log("user logged out", user);
  }
});

//regisration form
const loginForm = document.querySelector("#loginform");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = document.querySelector("#useremail").value;
  const password = document.querySelector("#userpassword").value;
  console.log(email, password);
  alert("you are successfully logged in");

  //sign the user in

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //reset form
    loginForm.reset();
    window.location.href = "/pages/dashboard.html";
  });

  //create new user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const modal = document.querySelector(".loginform-container");
      M.modal.getInstance(modal).close();
      //reset form
      loginForm.reset();
      window.location.href = "/pages/dashboard.html";
    })
    .catch((err) => {
      alert(err.message);
    });
});
