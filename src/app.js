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

var firestore = firebase.firestore();

//variable to access database
const db = firestore.collection("Articles");

// get submit form
let submitButton = document.getElementById("submit");

// create event listener to allow form submition
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  let title = document.getElementById("title").value;
  let createdDate = document.getElementById("cdate").value;
  let content = document.getElementById("content").value;

  // save form data to firebase
  db.doc()
    .set({
      title: title,
      date: createdDate,
      content: content,
    })
    .then(() => {
      console.log("Data saved");
    })
    .catch((error) => {
      console.log(error);
    });
});
