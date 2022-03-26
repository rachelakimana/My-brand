//user logout
function logout() {
  localStorage.removeItem("jwtToken");
  location.href = "/pages/login.html";

  // auth.signOut().then((res) => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //     } else {
  //       location.href = "/pages/login.html";
  //     }
  //   });
  // });
}
