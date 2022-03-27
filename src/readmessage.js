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
  fname.textContent = doc.data().firstName;
  lname.textContent = doc.data().lastName;
  emailadress.textContent = doc.data().email;
  phonenum.textContent = doc.data().phone;
  message.textContent = doc.data().message;
  icondelete.className = "fa-solid fa-trash-can";

  // deleting data
  icondelete.addEventListener("click", (e) => {
    e.stopPropagation();
    //     let id = e.target.p.getAttribute("messageid");
    let id = doc.id;
    console.log(id);
    firestore.collection("Messages").doc(id).delete();
  });
}

db.get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    // console.log(docData);

    renderMessage(doc);
  });
});
