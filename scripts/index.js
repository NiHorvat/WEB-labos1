//import { generate_items_HTML } from "./generate";

// na vrhu dokumenta imam sve globalne varijable
// a na dnu dokumenta imam sve funckije koje se moraju izvršiti svaki put kad >
//refresham stranicu



// TU MAPIRAM KATEGORIJE S NJIHOVIM "pravim imenima"
//zelim u kodu koristiti KATEGORIJA_1 a ne "Građevinska roba"
//pa zato tu imam spojeno
const KATEGORIJA_1 = ["Kategorija 1", "Bread"];
const KATEGORIJA_2 = ["Kategorija 2", "Burgers"];
const KATEGORIJA_3 = ["Kategorija 3", "Chicken"];
const KATEGORIJA_4 = ["Kategorija 4", "Coockies"];
const KATEGORIJA_5 = ["Kategorija 5", "Fish"];
const KATEGORIJA_6 = ["Kategorija 6", "Muffins"];
const KATEGORIJA_7 = ["Kategorija 7", "Pasta"];
const KATEGORIJA_8 = ["Kategorija 8", "Pizza"];
const KATEGORIJA_9 = ["Kategorija 9", "Ramen"];
const KATEGORIJA_10 = ["Kategorija 10", "Sandwich"];

let newsletterSubscribers = [];

let current_category = ""

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
document
  .getElementById(KATEGORIJA_7[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_7[1]);
  });
document
  .getElementById(KATEGORIJA_8[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_8[1]);
  });
document
  .getElementById(KATEGORIJA_9[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_9[1]);
  });
document
  .getElementById(KATEGORIJA_10[0])
  .addEventListener("click", function (event) {
    event.preventDefault();
    change_categorie(KATEGORIJA_10[1]);
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
    case KATEGORIJA_7[1]:
      items = generate_items_HTML(KATEGORIJA_7[1]);
      break;
    case KATEGORIJA_8[1]:
      items = generate_items_HTML(KATEGORIJA_8[1]);
      break;
    case KATEGORIJA_9[1]:
      items = generate_items_HTML(KATEGORIJA_9[1]);
      break;
    case KATEGORIJA_10[1]:
      items = generate_items_HTML(KATEGORIJA_10[1]);
      break;

    default:
      console.log("greska ko change_shop_items\nNEMA TE KATEGORIJE");
      //ako nema te kategorije gg
      return;
  }

  current_category = categorie;
  console.log(categorie);

  for (let i = 0; i < items.length; i++) {
    const el = document.createElement("li");
    el.innerHTML = items[i];
    lista.appendChild(el);
  }

  display_shop_items();

}

//ljudi koji su se pretplatili na newsletter
//pop up alert dodđe te user unutra upiše svoju email-adresu


//update shopingcart iz localstorage
//returns a list of HTML string
//svaki put kada generiram HTML updateam shopping cart
function generate_items_HTML(category_id) {
  update_shoppingcart();

  let output = [];
  category = data.categories.find((cat) => cat.name === category_id);
  if (!category) return;
  //console.log(category);

  for (let item of category["products"]) {

    let span_class = "no-text";
    let {ignore, quantity} = shopping_cart.get(item.id)  || {};
    if(quantity === undefined || quantity === null){
      quantity = "0";
    }else{
      quantity = String(quantity);
       span_class = "has-text";
    }

    

    let temp = `<div>
    <button onclick="add_to_shoppingcart('${encodeURIComponent(JSON.stringify(item))}')">
    </button>
    <span class = "${span_class}">${quantity}</span>
    <img src="${item.image}" alt="${item.name}">
    <p>${item.name}</p>
  </div>`;
    output.push(temp);
  }

  return output;
}


function add_to_shoppingcart(encoded_item) {
  const item = JSON.parse(decodeURIComponent(encoded_item));
  const id = item.id;

  if (shopping_cart.has(id)) {
    const entry = shopping_cart.get(id);
    entry.quantity += 1;
    shopping_cart.set(id, entry);
  } else {
    shopping_cart.set(id, {
      item: item,
      quantity: 1
    });
  }
  console.log("dodaj");
  save_shoppingcart();
  update_shoppingcart();
  red_circle_shoppingcart();
  //FIXME
  //ovo je užasno glupo i jako sporo
  change_categorie(current_category);


  // Display cart contents
  console.log("🛒 Shopping Cart:");
  for (const [id, { item, quantity }] of shopping_cart.entries()) {
    console.log(`Product ID: ${id}, Name: ${item.name}, Quantity: ${quantity}`);
  }
}


//pronađe sve spanove koji imaju u sebi nekvi broj 
//te im doda klasu koja ima crvenu pozadinu
function add_bouble_color(){

  const spans = document.querySelectorAll('.main-body .shop-items ul li button span');

  spans.forEach(span => {
    if (span.textContent.trim() !== '') {
      span.classList.add('has-text');
    } else {
      span.classList.add('no-text');
    }
  });

}
function red_circle_shoppingcart(){

  let n = number_items(); 
  if(n > 0){
    span = document.getElementById("span_cart");
    span.innerHTML = n;
    span.classList.remove("no-text");
    span.classList.add('has-text');
  }else{
    span = document.getElementById("span_cart");
    span.innerHTML = "";
    span.classList.remove("has-text");
    span.classList.add('no-text');
  }
}



//moves elements around if the category is selected/not selected
//togles how elemets are spaces
//jeli infopage gore i je li "vidljiv"
function display_shop_items(){
  console.log("display shopping items category = ",current_category);
  let shop_items = document.getElementById("shop-items");
  let infopage = document.getElementById("welcome-page");
  
  if(current_category == ""){

    shop_items.classList.remove("selected");
    infopage.classList.remove("selected");
    shop_items.classList.add("no-selected");
    infopage.classList.add("no-selected");

  }else{
    shop_items.classList.remove("no-selected");
    infopage.classList.remove("no-selected");
    shop_items.classList.add("selected");
    infopage.classList.add("selected");

  }
}

//SUFF koje run-a dok reloadam
red_circle_shoppingcart();
display_shop_items();