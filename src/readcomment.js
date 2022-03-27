//variable to access database
// const db = firestore.collection("Comments");

const commentContainer = document.querySelector(".commentcontainer");
const ulComment = document.querySelector("#commentwrapper");

// create element & render message
function renderComments(doc) {
  let li = document.createElement("li");
  let comment = document.createElement("div");
  let emailadress = document.createElement("p");
  let message = document.createElement("p");
  let deletemesage = document.createElement("div");
  let icondelete = document.createElement("i");

  li.appendChild(comment);
  li.appendChild(deletemesage);
  comment.appendChild(emailadress);
  comment.appendChild(message);
  deletemesage.appendChild(icondelete);

  ulComment.appendChild(li);
  commentContainer.appendChild(ulComment);

  li.classList.add("commentlist");

  comment.setAttribute("id", "comment");
  deletemesage.setAttribute("id", "trashicon");

  li.setAttribute("commentid", doc.id);
  message.textContent = doc.data().comment;
  emailadress.textContent = doc.data().email;
  icondelete.className = "fa-solid fa-trash-can";

  // deleting data
  icondelete.addEventListener("click", (e) => {
    e.stopPropagation();
    //     let id = e.target.p.getAttribute("messageid");
    let id = doc.id;
    console.log(id);
    firestore.collection("Comments").doc(id).delete();
  });
}

db.get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    // console.log(docData);

    renderComments(doc);
  });
});
