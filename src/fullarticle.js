const db = firestore.collection("Articles");
const id = location.hash.slice(1);
console.log(id);
const title = document.getElementById("title");
const createdDate = document.getElementById("date");
// const image = document.getElementById('image');
const contentbody = document.getElementById("fullcontent");
const headerdate = document.getElementById("hdate");
const headerowner = document.getElementById("blogowner");

headerdate.append("posted on:", createdDate, "by", headerowner);
headerowner.textContent = "Akimana Rachel";

fetch(`https://my-brand-website.herokuapp.com/api/blog/${id}`)
  .then((response) => response.json())
  .then((blog) => {
    console.log(blog);
    title.innerHTML = blog.title;
    createdDate.innerHTML = blog.createdAt;
    //     image.src = res.data().image
    contentbody.innerHTML = blog.content;
  });

// db.doc(id)
//   .get()
//   .then((doc) => {
//     title.innerHTML = doc.data().title;
//     createdDate.innerHTML = doc.data().date;
//     //     image.src = res.data().image
//     contentbody.innerHTML = doc.data().content;
//   });
