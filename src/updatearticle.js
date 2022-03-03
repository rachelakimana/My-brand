const db = firestore.collection("Articles");
const id = location.hash.slice(1);
console.log(id);
db.doc(id)
  .get()
  .then((doc) => {
    // let id = doc.id;
    // console.log(id);
    // firestore.collection("Articles").doc(id);

    document.getElementById("title").value = doc.data().title;
    document.getElementById("date").value = doc.data().date;
    document.getElementById("content").value = doc.data().content;

    let buttonupdate = document.getElementById("update");
    buttonupdate.addEventListener("click", (e) => {
      e.preventDefault();
      db.doc(id)
        .update({
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          content: document.getElementById("content").value,
        })
        .then((res) => {
          title.value = "";
          date.value = "";
          content.value = "";
          alert("Post updated");
          location.href = "/pages/dashboard.html";
        })
        .catch((err) => {
          alert("Error: " + err.message);
        });
    });
  });
