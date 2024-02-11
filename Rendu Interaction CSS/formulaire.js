let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let prenom = document.querySelector("#prenom");

  if (prenom.value === "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Catégorie 'Prénom' doit être remplis";
    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let nom = document.querySelector("#nom");

  if (nom.value === "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Catégorie 'Nom' doit être remplis";
    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le Champ Email ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    prenom.classList.contains("success") &&
    nom.classList.contains("success") &&
    email.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggledarkmode = document.querySelector(".toggle-darkmode");

  toggledarkmode.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
  });
});
