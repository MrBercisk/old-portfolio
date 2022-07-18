/* typing animation */
var typed = new Typed(".typing", {
  strings: ["", "Front End Developer", "Web Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbztFAdMJATF23pr1kiOS3A8y0-waCuBC0xBPeVNhpKrtWaxxg0NjR1mDtHrAM5Ur_47UQ/exec";
const form = document.forms["bimo-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  //jangan jalankan fungsi default
  e.preventDefault();
  //ketika tombol submit diklik
  //tampilkan tombol lodaing,hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  //jalankan fetch
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim,hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan alert
      myAlert.classList.toggle("d-none");
      //Reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
