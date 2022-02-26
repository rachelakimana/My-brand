const firebaseConfig = {
  apiKey: "AIzaSyDjoDBwi1YFBTG6ciyn8PyiwigXzgjlnyA",
  authDomain: "capstonee-829ec.firebaseapp.com",
  projectId: "capstonee-829ec",
  storageBucket: "capstonee-829ec.appspot.com",
  messagingSenderId: "724020686251",
  appId: "1:724020686251:web:13af0371dda4fd3284f6ee",
};

//Initialize Cloud Firestore
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var firestore = firebase.firestore();

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
  alert("you successfully logged in");

  //sign the user in

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //reset form
    loginForm.reset();
    window.location.href = "/pages/dashboard.html";
  });
  // auth.createUserWithEmailAndPassword(email, password).then((cred) => {
  //   const modal = document.querySelector(".loginform-container");
  //   M.Modal.getInstance(modal).close();
  //   //reset form
  //   loginForm.reset();
  //   window.location.href = "/pages/dashboard.html";
  // });
});

//user logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});
