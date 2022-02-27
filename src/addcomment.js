//variable to access database
const db = firestore.collection("Comments");

// get submit form
let submitButton = document.getElementById("submitcomnt");

// create event listener to allow form submition
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  let usremail = document.getElementById("usremail").value;
  let usrcomment = document.getElementById("usrcomment").value;
  // save form data to firebase
  db.doc()
    .set({
      email: usremail,
      comment: usrcomment,
    })
    .then(() => {
      console.log("Data saved");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
});
