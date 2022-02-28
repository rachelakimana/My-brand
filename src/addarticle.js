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

// function myFunction() {
//   document.getElementById("articleid").reset();
//   document.getElementById("content").value = "";
// }
// // variables
// var imagename, imageurl;
// var files = [];
// var reader = new FileReader();

// // selection process
// var loadFile = function (event) {
//   var output = document.getElementById("output");
//   output.src = URL.createObjectURL(event.target.files[0]);
//   output.onload = function () {
//     URL.revokeObjectURL(output.src);
//   };
// };
// //upload picture to storage
// document.getElementById("upload").onclick = function () {
//   imagename = document.getElementById("imgname");
//   var uploadimage = firebase
//     .storage()
//     .ref("Image/" + imagename.value + ".png")
//     .put(files[0]);

//   uploadimage.on(
//     "state_changed",
//     function (snapshot) {
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       document.getElementById("showprogress").innerHTML =
//         "upload" + progress + "%";
//     },

//     //error handling
//     function (error) {
//       alert("error in the saving the image");
//     },

//     //submit image link to database
//     function () {
//       uploadimage.snapshot.ref.getDownloadURL().then(function (url) {
//         imageurl = url;
//         console.log(imageurl);
//         firebase
//           .database()
//           .ref("picture/" + imagename)
//           .set({
//             Name: imagename.value,
//             Link: imageurl,
//           });
//         console.log("image added successfully");
//       });
//     }
//   );
// };
