// const db = firestore.collection("Articles");
const id = location.hash.slice(1);
console.log(id);
// db.doc(id)
//   .get()
//   .then((doc) => {
// let id = doc.id;
// console.log(id);
// firestore.collection("Articles").doc(id);
const activeToken = localStorage.getItem("jwtToken");
fetch(`https://my-brand-website.herokuapp.com/api/v1/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("title").value = data.title;
    document.getElementById("date").value = data.createdAt;
    document.getElementById("content").value = data.content;

    let buttonupdate = document.getElementById("update");
    buttonupdate.addEventListener("click", (e) => {
      e.preventDefault();
      fetch(`https://my-brand-website.herokuapp.com/api/v1/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${activeToken}`,
        },
        body: JSON.stringify({
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          content: document.getElementById("content").value,
        }),
      });
      if (activeToken) {
        title.value = "";
        date.value = "";
        content.value = "";
        alert("Blog updated");
        location.href = "/My-brand/pages/dashboard.html";
      } else {
        alert("Action denied, you have first to login");
        location.href = "/My-brand/pages/login.html";
      }
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
