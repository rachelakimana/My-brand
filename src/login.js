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

const loginForm = document.querySelector("#loginform");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = document.querySelector("#useremail").value;
  const password = document.querySelector("#userpassword").value;
  console.log(email, password);
  alert("tou successfully logged in");

  //sign in the user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    const modal = document.querySelector(".loginform-container");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
