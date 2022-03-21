// const db = firestore.collection("Articles");
const id = location.hash.slice(1);
console.log(id);
// db.doc(id)
//   .get()
//   .then((doc) => {
// let id = doc.id;
// console.log(id);
// firestore.collection("Articles").doc(id);
fetch(`http://localhost:3000/api/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("title").value = data.title;
    document.getElementById("date").value = data.createdAt;
    document.getElementById("content").value = data.content;

    let buttonupdate = document.getElementById("update");
    buttonupdate.addEventListener("click", (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          content: document.getElementById("content").value,
        }),
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
      // db.doc(id)
      //   .update({
      //     title: document.getElementById("title").value,
      //     date: document.getElementById("date").value,
      //     content: document.getElementById("content").value,
      //   })
      // .then((res) => {
      //   title.value = "";
      //   date.value = "";
      //   content.value = "";
      //   alert("Post updated");
      //   location.href = "/pages/dashboard.html";
      // })
      // .catch((err) => {
      //   alert("Error: " + err.message);
      // });
    });
  });
