import { generate_items_HTML } from "./generate";



let odabrana_kategorija = ""

document
  .getElementById("Kategorija 1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 1");
    odabrana_kategorija = "Kategorija 1";
  });
document
  .getElementById("Kategorija 2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 2");
    odabrana_kategorija = "Kategorija 2";

  });
document
  .getElementById("Kategorija 3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 3");
    odabrana_kategorija = "Kategorija 3";

  });
document
  .getElementById("Kategorija 4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 4");
    odabrana_kategorija = "Kategorija 4";

  });
document
  .getElementById("Kategorija 5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 5");
    odabrana_kategorija = "Kategorija 5";

  });
document
  .getElementById("Kategorija 6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 6");
    odabrana_kategorija = "Kategorija 6";

  });
document
  .getElementById("Kategorija 7")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 7");
    odabrana_kategorija = "Kategorija 7";

  });
document
  .getElementById("Kategorija 8")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 8");
    odabrana_kategorija = "Kategorija 8";

  });
document
  .getElementById("Kategorija 9")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 9");
    odabrana_kategorija = "Kategorija 9";

  });
document
  .getElementById("Kategorija 10")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 10");
    odabrana_kategorija = "Kategorija 10";

  });
document
  .getElementById("Kategorija 11")
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie("Kategorija 11");
    odabrana_kategorija = "Kategorija 11";

  });

function change_categorie(categorie) {
  document.getElementById("odabrana_kategorija").textContent =
    "Odabrana kategorija: " + categorie;
    console.log(odabrana_kategorija);
    change_shop_items();
}


function change_shop_items(){
  const lista = document.querySelector("#shop-items-list");
  lista.innerHTML = "";
  if(odabrana_kategorija === "Kategorija 1"){
    for(let i = 0; i < 20; i++){
      const el = document.createElement("li");
      el.textContent = `kategorija 1 ${i} `;
      lista.appendChild(el);
    }
  }
  else if(odabrana_kategorija === "Kategorija 2"){
    for(let i = 0; i < 20; i++){
      const el = document.createElement("li");
      el.textContent = `kategorija 2 ${i} `;

      lista.appendChild(el);
    }
  }
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



