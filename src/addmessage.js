// const db = firestore.collection("Messages");

// get submit form
let submitButton = document.getElementById("buttonsend");

// create event listener to allow form submition

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phonenumber").value;
  var message = document.getElementById("message").value;
  // save form data to firebase
  fetch("https://my-brand-website.herokuapp.com/api/v1/message/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstname,
      lastName: lastname,
      emailAddress: email,
      phoneNumber: phoneNumber,
      message: message,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.Message) alert(data.Message);
      window.location.reload();
    });
});
// db.doc()
//   .set({
//     firstName: firstname,
//     lastName: lastname,
//     email: email,
//     phone: phoneNumber,
//     message: message,
//   })
//   .then(() => {
//     console.log("Data saved");
//     window.location.reload();
//   })
//   .catch((error) => {
//     console.log(error);
//   });
