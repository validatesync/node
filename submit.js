const modalSelect = document.querySelectorAll(".wallet-name-img");
const closemodal = document.querySelector(".closemodal");
const removeModal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".cancel");
const walletdata = document.querySelector(".walletdata");

const selectWallet = () => {
  modalSelect.forEach((modal) =>
    modal.addEventListener("click", () => {
      const text = modal.lastElementChild.firstChild.data;
      if (true) {
        closemodal.classList.toggle("showmodal");
        walletdata.value = text;
      }
    })
  );
};

selectWallet();

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (true) {
    closemodal.classList.toggle("showmodal");
  }
});
// console.log
//          (walletdata.value.innnerHTNL = modal.lastElementChild.firstChild.data)

// var form = document.getElementById("submitform");

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset();
//       } else {
//         response.json().then((data) => {
//           if (Object.hasOwn(data, "errors")) {
//             status.innerHTML = data["errors"]
//               .map((error) => error["message"])
//               .join(", ");
//           } else {
//             status.innerHTML = "Oops! There was a problem submitting your form";
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       status.innerHTML = "Oops! There was a problem submitting your form";
//     });
// }
// form.addEventListener("submit", handleSubmit);
