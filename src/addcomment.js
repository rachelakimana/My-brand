// get submit form
let submitButton = document.getElementById("submitcomnt");

// create event listener to allow form submition
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  let usremail = document.getElementById("usremail").value;
  let usrcomment = document.getElementById("usrcomment").value;
  // save form data to firebase
  dbc
    .doc()
    .set({
      email: usremail,
      comment: usrcomment,
    })
    .then(() => {
      console.log("Comment sent");
      usremail = "";
      usrcomment = "";
    })
    .catch((error) => {
      console.log(error);
    });
});
