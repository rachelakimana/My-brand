//variable to access database
// const db = firestore.collection("Articles");

// render data from firestore database to form
function renderAticles(doc) {
  // get form values
  console.log(doc);
  var blogcontainer = document.querySelector(".blog-container");
  var bloglist = document.createElement("li");
  var bloginfo = document.createElement("div");
  var blogimage = document.createElement("div");
  var image = document.createElement("img");
  image.src =
    "https://2img.net/h/media02.hongkiat.com/nature-photography/autumn-poolside.jpg";
  var spanimgdescription = document.createElement("span");
  spanimgdescription.textContent = "Nature beauty image";
  var blogdescription = document.createElement("div");
  var header2 = document.createElement("h2");
  var header5 = document.createElement("h5");
  var spandate = document.createElement("span");
  var paragraph = document.createElement("p");
  var blogowner = document.createElement("span");
  var readMore = document.createElement("button");

  header5.append("posted on:", spandate, "by", blogowner);
  blogowner.textContent = "Akimana Rachel";
  blogcontainer.classList.add("blog-container");
  bloglist.classList.add("blog-list");
  bloginfo.classList.add("blog-info");
  blogimage.classList.add("blog-image");
  blogdescription.classList.add("blog-description");
  paragraph.classList.add("description");
  readMore.classList.add("readmore");

  blogcontainer.appendChild(bloglist);
  bloglist.appendChild(bloginfo);
  bloginfo.appendChild(blogimage);
  bloginfo.appendChild(blogdescription);
  blogimage.appendChild(image);
  blogimage.appendChild(spanimgdescription);
  blogdescription.appendChild(header2);
  blogdescription.appendChild(header5);
  blogdescription.appendChild(paragraph);
  blogdescription.appendChild(readMore);

  bloglist.setAttribute("articleid", doc._id);
  header2.textContent = doc.title;
  spandate.textContent = doc.createdAt;
  paragraph.textContent = doc.content.substring(0, 200);
  readMore.textContent = "Read More";
  readMore.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = `/My-brand/pages/viewblog.html#${doc._id}`;
  });
}

// db.get().then((snapshot) => {
//   snapshot.docs.forEach((doc) => {
//     const docData = doc.data();
//     // console.log(docData);

//     renderAticles(doc);
//   });
// });
fetch("https://my-brand-website.herokuapp.com/api/v1/blogs")
  .then((response) => response.json())
  .then(({ Articles }) => {
    console.log(Articles);
    Articles.map((doc) => {
      renderAticles(doc);
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
