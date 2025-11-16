function moncv() {
  window.open("./cv/CV_Zawadi_Bagalwa_2025 info.docx", "-blank");
}
function projet() {
  window.location.href = "#projets";
}
function envoyermessage() {
  const prenom = document.getElementById("prenom").Value.trim();
  const nom = document.getElementById("nom").Value.trim();
  const sujet = document.getElementById("sujet").Value.trim();
  const message = document.getElementById("message").Value.trim();
  if (!prenom || !nom || !sujet || !message === "") {
    alert("veuiller completer touts les champs");
    return;
  } else {
    alert("le message est bien envoyé");
  }
}
function retour() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

