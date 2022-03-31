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
  message.textContent = doc.comment;
  emailadress.textContent = doc.email;
  icondelete.className = "fa-solid fa-trash-can";

  // deleting data

  icondelete.addEventListener("click", myFunction);

  function myFunction() {
    if (
      confirm("Confirm, Are you sure you want to delete this comment ?") == true
    ) {
      let id = doc._id;
      console.log(id);

      fetch(`https://my-brand-website.herokuapp.com/api/v1/comment/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.Message) alert(data.Message);
          window.location.reload();
        });
    } else {
    }

    // if (activeToken) {
    //   alert("Article deleted");
    //   window.location.reload();
    // }
    // if (!activeToken) {
    //   alert("Action denied, you have first to login");
    //   window.location.reload();
    // }
  }
  // icondelete.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   //     let id = e.target.p.getAttribute("messageid");
  //   let id = doc.id;
  //   console.log(id);
  //   firestore.collection("Comments").doc(id).delete();
  // });
}

fetch("https://my-brand-website.herokuapp.com/api/v1/comments", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
  },
})
  .then((response) => {
    return response.json();
  })
  .then(({ allComments }) => {
    console.log(allComments);
    allComments.map((doc) => {
      renderComments(doc);
    });
  });

// db.get().then((snapshot) => {
//   snapshot.docs.forEach((doc) => {
//     const docData = doc.data();
//     // console.log(docData);

//     renderComments(doc);
//   });
// });
