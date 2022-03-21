//get user info
const email = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");
const loginbutn = document.getElementById("loginbutton");

loginbutn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email.value, password: password.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.localStorage["jwtToken"] = data.token;

      if (data) {
        window.location.href = "/pages/dashboard.html";
      } else {
        alert("Invalid username or Password");
      }
    });

  //sign the user in
  // auth
  //   .signInWithEmailAndPassword(email.value, password.value)
  //   .then((cred) => {
  //     location.href = "/pages/dashboard.html";
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
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
