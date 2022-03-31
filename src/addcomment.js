// get submit form
let submitButton = document.getElementById("submitcomnt");

// create event listener to allow form submition
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  let usremail = document.getElementById("usremail").value;
  let usrcomment = document.getElementById("usrcomment").value;
  // save form data to firebase

  fetch("https://my-brand-website.herokuapp.com/api/v1/comment/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: usremail,
      comment: usrcomment,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.Message) alert(data.Message);
      window.location.reload();
    });
  // dbc
  //   .doc()
  //   .set({
  //     email: usremail,
  //     comment: usrcomment,
  //   })
  //   .then(() => {
  //     console.log("Comment sent");
  //     usremail = "";
  //     usrcomment = "";
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
