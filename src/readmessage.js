//variable to access database
// const db = firestore.collection("Messages");

const messageContainer = document.querySelector(".messagecontainer");
const ulMessage = document.querySelector("#messagewrapper");

// create element & render message
function renderMessage(doc) {
  let li = document.createElement("li");
  let identity = document.createElement("div");
  let namecontainer = document.createElement("h3");
  let fname = document.createElement("span");
  let lname = document.createElement("span");
  let emailadress = document.createElement("p");
  let phonenum = document.createElement("p");
  let messagecontainer = document.createElement("div");
  let message = document.createElement("p");
  let deletemesage = document.createElement("div");
  let icondelete = document.createElement("i");

  li.appendChild(identity);
  li.appendChild(messagecontainer);
  li.appendChild(deletemesage);
  identity.appendChild(namecontainer);
  namecontainer.appendChild(fname);
  namecontainer.appendChild(lname);
  identity.appendChild(emailadress);
  identity.appendChild(phonenum);
  messagecontainer.appendChild(message);
  deletemesage.appendChild(icondelete);

  ulMessage.appendChild(li);
  messageContainer.appendChild(ulMessage);

  namecontainer.append(fname, lname);
  li.classList.add("messagelist");

  identity.setAttribute("id", "useridentity");
  lname.setAttribute("id", "secondname");
  messagecontainer.setAttribute("id", "messagedetail");
  deletemesage.setAttribute("id", "trashicon");

  li.setAttribute("messageid", doc.id);
  fname.textContent = doc.firstName;
  lname.textContent = doc.lastName;
  emailadress.textContent = doc.emailAdress;
  phonenum.textContent = doc.phoneNumber;
  message.textContent = doc.message;
  icondelete.className = "fa-solid fa-trash-can";

  // deleting data
  icondelete.addEventListener("click", myFunction);

  function myFunction() {
    if (
      confirm("Confirm, Are you sure you want to delete this message ?") == true
    ) {
      let id = doc._id;
      console.log(id);

      fetch(`https://my-brand-website.herokuapp.com/api/v1/message/${id}`, {
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
  //   firestore.collection("Messages").doc(id).delete();
  // });
}

fetch("https://my-brand-website.herokuapp.com/api/v1/messages", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
  },
})
  .then((response) => {
    return response.json();
  })
  .then(({ allMessages }) => {
    console.log(allMessages);
    allMessages.map((doc) => {
      renderMessage(doc);
    });
  });
// db.get().then((snapshot) => {
//   snapshot.docs.forEach((doc) => {
//     const docData = doc.data();
//     // console.log(docData);

//     renderMessage(doc);
//   });
// });
