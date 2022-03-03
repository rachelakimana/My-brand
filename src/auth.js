auth.onAuthStateChanged((user) => {
  if (user) {
  } else {
    location.href = "/src/login.js";
  }
});
