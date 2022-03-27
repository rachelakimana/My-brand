auth.onAuthStateChanged((user) => {
  if (user) {
  } else {
    location.href = "/My-brand/pages/login.html";
  }
});
