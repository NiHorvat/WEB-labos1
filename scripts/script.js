//import { generate_items_HTML } from "./generate";

// TU MAPIRAM KATEGORIJE S NJIHOVIM "pravim imenima" 
//zelim u kodu koristiti KATEGORIJA_1 a ne "Građevinska roba"
//pa zato tu imam spojeno
const KATEGORIJA_1 = ["Kategorija 1","Građevinska roba"];
const KATEGORIJA_2 = ["Kategorija 2","Avioni"];
const KATEGORIJA_3 = null;
const KATEGORIJA_4 = null;
const KATEGORIJA_5 = null;
const KATEGORIJA_6 = null;


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

//TODO ovo je ružno treba poboljšati kako kategorije se prenose
function change_shop_items(){
  
  const lista = document.querySelector("#shop-items-list");
  lista.innerHTML = "";
  let items = [];
  
  switch (odabrana_kategorija) {
    case KATEGORIJA_1[0]:
      items = generate_items_HTML(KATEGORIJA_1[1]);
      break;
    case KATEGORIJA_2[0]:
      items = generate_items_HTML(KATEGORIJA_2[1]);
      break;
    default:
      break;
  }

  for(let i = 0; i < items.length; i++){
    const el = document.createElement("li");
    el.innerHTML = items[i];
    lista.appendChild(el);
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



