const myloader = document.getElementById("preloader");

window.onload = (event) => {
  myloader.style.display = "none";
};

const updateDate = () => {
  const newdate = new Date();
  let newdateUpdate = newdate.getFullYear();
  let dateUpdate = document.getElementById("date");
  dateUpdate.innerHTML = newdateUpdate;
};
updateDate();
