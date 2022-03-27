//user logout
function logout() {
  localStorage.removeItem("jwtToken");
  location.href = "/My-brand/pages/login.html";

  // auth.signOut().then((res) => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //     } else {
  //       location.href = "/pages/login.html";
  //     }
  //   });
  // });
}
