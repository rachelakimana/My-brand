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
  var articletitle = document.createElement("h2");
  var createddae = document.createElement("h5");
  var spandate = document.createElement("span");
  var articlecontent = document.createElement("p");
  var blogowner = document.createElement("span");
  let deletearticle = document.createElement("div");
  let icondelete = document.createElement("i");

  createddae.append("posted on:", spandate, "by", blogowner);
  blogowner.textContent = "Akimana Rachel";
  blogcontainer.classList.add("blog-container");
  bloglist.classList.add("blog-list");
  bloginfo.classList.add("blog-info");
  blogimage.classList.add("blog-image");
  blogdescription.classList.add("blog-description");
  articlecontent.classList.add("description");
  deletearticle.setAttribute("id", "trashicon");

  blogcontainer.appendChild(bloglist);
  bloglist.appendChild(bloginfo);
  bloginfo.appendChild(blogimage);
  bloginfo.appendChild(blogdescription);
  bloginfo.appendChild(deletearticle);
  deletearticle.appendChild(icondelete);
  blogimage.appendChild(image);
  blogimage.appendChild(spanimgdescription);
  blogdescription.appendChild(articletitle);
  blogdescription.appendChild(createddae);
  blogdescription.appendChild(articlecontent);

  bloglist.setAttribute("blogarticleid", doc.id);
  articletitle.textContent = doc.data().title;
  spandate.textContent = doc.data().date;
  articlecontent.textContent = doc.data().content;
  icondelete.className = "fa-solid fa-trash-can";

  // deleting data
  icondelete.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = doc.id;
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
      let li = bloglist.querySelector("[blogarticleid=" + change.doc.id + "]");
      bloglist.removeChild(li);
      console.log("article removed");
    }
  });
});
