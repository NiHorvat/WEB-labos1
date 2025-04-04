//import { generate_items_HTML } from "./generate";

// TU MAPIRAM KATEGORIJE S NJIHOVIM "pravim imenima" 
//zelim u kodu koristiti KATEGORIJA_1 a ne "Građevinska roba"
//pa zato tu imam spojeno
const KATEGORIJA_1 = ["Kategorija 1","Građevinska roba"];
const KATEGORIJA_2 = ["Kategorija 2","Avioni"];
const KATEGORIJA_3 = ["Kategorija 3","Avioni"];
const KATEGORIJA_4 = ["Kategorija 4","Avioni"];
const KATEGORIJA_5 = ["Kategorija 5","Avioni"];
const KATEGORIJA_6 = ["Kategorija 6","Avioni"];

document
  .getElementById(KATEGORIJA_1[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_1[1]);
  });
document
  .getElementById(KATEGORIJA_2[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_2[1]);

  });
document
  .getElementById(KATEGORIJA_3[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_3[1]);

  });
document
  .getElementById(KATEGORIJA_4[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_4[1]);

  });
document
  .getElementById(KATEGORIJA_5[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_5[1]);

  });
document
  .getElementById(KATEGORIJA_6[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_6[1]);

  });



function change_categorie(categorie) {
  document.getElementById("odabrana_kategorija").textContent =
    "Odabrana kategorija: " + categorie;
    console.log(odabrana_kategorija);
    change_shop_items(categorie);
}

//TODO ovo je ružno treba poboljšati kako kategorije se prenose
function change_shop_items(categorie){
  const lista = document.querySelector("#shop-items-list");
  lista.innerHTML = "";
  let items = [];
  
  switch (categorie) {
    case KATEGORIJA_1[1]:
      items = generate_items_HTML(KATEGORIJA_1[1]);
      break;
    case KATEGORIJA_2[1]:
      items = generate_items_HTML(KATEGORIJA_2[1]);
      break;
    default:
      console.log("greska ko change_shop_items");
      //ako nema te kategorije gg
      return;
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



