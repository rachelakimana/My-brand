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
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
});
