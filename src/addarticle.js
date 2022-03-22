//variable to access database
// const db = firestore.collection("Articles");

// get submit form
let submitButton = document.getElementById("submit");

// create event listener to allow form submition
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // get form values
  let title = document.getElementById("title").value;
  let createdDate = document.getElementById("cdate").value;
  let content = document.getElementById("content").value;

  // add blog
  fetch("https://my-brand-website.herokuapp.com/api/blog/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  })
    .then(() => {
      console.log("Data saved");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });

  // save form data to firebase
  // db.doc()
  //   .set({
  //     title: title,
  //     date: createdDate,
  //     content: content,
  //   })
  //   .then(() => {
  //     console.log("Data saved");
  //     window.location.reload();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});

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

function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.getElementById("photo").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type,
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      console.log(url);
      alert("image uploaded successful");
      // const image = document.querySelector("#output");
      // image.src = url;
    })
    .catch(console.error);
}

//upload picture to storage

// document.getElementById("upload").onclick = function () {
//   imagename = document.getElementById("photo");
//   var uploadimage = firebase
//     .storage()
//     .ref("Images/" + imagename.value + ".png")
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
//     }

// //submit image link to database
// function () {
//   uploadimage.snapshot.ref.getDownloadURL().then(function (url) {
//     imageurl = url;
//     console.log(imageurl);
//     firebase
//       .database()
//       .ref("picture/" + imagename)
//       .set({
//         Name: imagename.value,
//         Link: imageurl,
//       });
//     console.log("image added successfully");
//   });
// }
//   );
// };
