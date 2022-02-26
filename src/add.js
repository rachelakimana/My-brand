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

console.log(firebase);

var firestore = firebase.firestore();

//variable to access database
const db = firestore.collection("Articles");

// render data from firestore database to form
function renderAticles(doc) {
  // get form values
  var blogcontainer = document.querySelector(".blog-container");
  var bloglist = document.createElement("li");
  var bloginfo = document.createElement("div");
  var blogimage = document.createElement("div");
  var image = document.createElement("img");
  var spanimgdescription = document.createElement("span");
  var blogdescription = document.createElement("div");
  var header2 = document.createElement("h2");
  var header5 = document.createElement("h5");
  var spandate = document.createElement("span");
  var paragraph = document.createElement("p");
  var blogowner = document.createElement("span");
  let deletearticle = document.createElement("div");

  header5.append("posted on:", spandate, "by", blogowner);
  blogowner.textContent = "Akimana Rachel";
  blogcontainer.classList.add("blog-container");
  bloglist.classList.add("blog-list");
  bloginfo.classList.add("blog-info");
  blogimage.classList.add("blog-image");
  blogdescription.classList.add("blog-description");
  paragraph.classList.add("description");

  blogcontainer.appendChild(bloglist);
  bloglist.appendChild(bloginfo);
  bloglist.appendChild(blogdescription);
  bloginfo.appendChild(blogimage);
  bloginfo.appendChild(blogdescription);
  bloglist.appendChild(deletearticle);
  blogimage.appendChild(image);
  blogimage.appendChild(spanimgdescription);
  blogdescription.appendChild(header2);
  blogdescription.appendChild(header5);
  blogdescription.appendChild(paragraph);

  bloglist.setAttribute("articleid", doc.id);
  header2.textContent = doc.data().title;
  spandate.textContent = doc.data().date;
  paragraph.textContent = doc.data().content;

  deletearticle.textContent = "X";

  // deleting data
  deletearticle.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("articleid");
    console.log(id);
    firestore.collection("Articles").doc(id).delete();
  });
}

db.get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    // console.log(docData);

    renderAticles(doc);
  });
});

db.onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    console.log(change.doc.data());
    if (change.type == "added") {
      renderAticles(change.doc);
    } else if (change.type == "removed") {
      let li = bloglist.querySelector("[articleid=" + change.doc.id + "]");
      bloglist.removeChild(li);
      console.log("article removed");
    }
  });
});
