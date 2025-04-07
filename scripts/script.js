//import { generate_items_HTML } from "./generate";

// na vrhu dokumenta imam sve globalne varijable
// a na dnu dokumenta imam sve funckije koje se moraju izvršiti svaki put kad >
//refresham stranicu



// TU MAPIRAM KATEGORIJE S NJIHOVIM "pravim imenima"
//zelim u kodu koristiti KATEGORIJA_1 a ne "Građevinska roba"
//pa zato tu imam spojeno
const KATEGORIJA_1 = ["Kategorija 1", "Građevinska roba"];
const KATEGORIJA_2 = ["Kategorija 2", "Avioni"];
const KATEGORIJA_3 = ["Kategorija 3", "Avioni"];
const KATEGORIJA_4 = ["Kategorija 4", "Avioni"];
const KATEGORIJA_5 = ["Kategorija 5", "Građevinska roba"];
const KATEGORIJA_6 = ["Kategorija 6", "Avioni"];

let shopping_cart;

let newsletterSubscribers = [];

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
  change_shop_items(categorie);
}

// dobijemo neku kategoriju te na temelju nje generiramo string-HTML
// u kojem displejamo sve elemente koji nam trebaju
function change_shop_items(categorie) {
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
    case KATEGORIJA_3[1]:
      items = generate_items_HTML(KATEGORIJA_3[1]);
      break;
    case KATEGORIJA_4[1]:
      items = generate_items_HTML(KATEGORIJA_4[1]);
      break;
    case KATEGORIJA_5[1]:
      items = generate_items_HTML(KATEGORIJA_5[1]);
      break;
    case KATEGORIJA_6[1]:
      items = generate_items_HTML(KATEGORIJA_6[1]);
      break;

    default:
      console.log("greska ko change_shop_items\nNEMA TE KATEGORIJE");
      //ako nema te kategorije gg
      return;
  }

  for (let i = 0; i < items.length; i++) {
    const el = document.createElement("li");
    el.innerHTML = items[i];
    lista.appendChild(el);
  }
}

//ljudi koji su se pretplatili na newsletter
//pop up alert dodđe te user unutra upiše svoju email-adresu

document.getElementById("NewsLetter").addEventListener("click", function () {
  let person = prompt(
    "Unesite Vašu e-mail adresu da se čretplatite na naš newsletter"
  );
  newsletterSubscribers.push(person);
  console.log(newsletterSubscribers);
});

//update shopingcart iz localstorage
function update_shoppingcart() {
  let stored_map = localStorage.getItem("shopping_cart_items");
  if (stored_map == null) {
    shopping_cart = new Map();
  } else {
    const entries = JSON.parse(stored_map);
    shopping_cart = new Map(entries);
  }
}

function save_shoppingcart() {
  const map_array = Array.from(shopping_cart.entries());
  localStorage.setItem("shopping_cart_items", JSON.stringify(map_array));
}

function add_to_shoppingcart(item_name) {
  let element = shopping_cart.get(item_name);
  if (element === undefined) {
    shopping_cart.set(item_name, 1);
  } else {
    element++;
    shopping_cart.set(item_name, element);
  }
  console.log("shopping cart entries = ", shopping_cart.entries());

  save_shoppingcart();
}

//returns a list of HTML string
function generate_items_HTML(category_id) {
  update_shoppingcart();

  let output = [];
  category = data.categories.find((cat) => cat.name === category_id);
  if (!category) return;
  //console.log(category);

  for (let item of category["products"]) {
    let temp = `<button onclick = "add_to_shoppingcart('${item.name}')"><img src="${item.image}" alt="${item.name}"><p>${item.name}</p><p>${category.name}</p></button>`;

    output.push(temp);
  }

  return output;
}

//funkcije koje se executaju svaki put kad refresham stranicu

update_shoppingcart();
