// script contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw44cFcYEpm4vhAeEneS15irdc3sQmnEjdhwRZSxQQvkewJo4aZ7tYwbZrkqcw5eySS/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Tampilkan tombol loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
