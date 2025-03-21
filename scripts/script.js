/*
    mijenjanje h2 ODABRANA KATEGORIJA
*/
document
  .getElementById("Kategorija 1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 1");
  });
document
  .getElementById("Kategorija 2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 2");
  });
document
  .getElementById("Kategorija 3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 3");
  });
document
  .getElementById("Kategorija 4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 4");
  });
document
  .getElementById("Kategorija 5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 5");
  });
document
  .getElementById("Kategorija 6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 6");
  });
document
  .getElementById("Kategorija 7")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 7");
  });
document
  .getElementById("Kategorija 8")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 8");
  });
document
  .getElementById("Kategorija 9")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 9");
  });
document
  .getElementById("Kategorija 10")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 10");
  });
document
  .getElementById("Kategorija 11")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 11");
  });

function change_categorie(categorie) {
  document.getElementById("odabrana_kategorija").textContent =
    "Odabrana kategorija: " + categorie;
}



//ljudi koji su se pretplatili na newsletter
//pop up alert dodđe te user unutra upiše svoju email-adresu
let newsletterSubscribers = [];
document
.getElementById("NewsLetter")
.addEventListener("click",function(){
        let person = prompt("Unesite Vašu e-mail adresu da se čretplatite na naš newsletter");
        newsletterSubscribers.push(person);
        console.log(newsletterSubscribers)
    });



