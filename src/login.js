//get user info
const email = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");
const loginbutn = document.getElementById("loginbutton");

loginbutn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://my-brand-website.herokuapp.com/api/v1/user/login", {
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
      if (data.token) {
        window.location.href = "/My-brand/pages/dashboard.html";
      } else {
        alert(data.message);
        window.location.href = "/My-brand/pages/login.html";
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
