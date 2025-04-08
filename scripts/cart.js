function generate_shoopingcart_HTML() {

  let output = [];

  for (const [id, { item, quantity }] of shopping_cart.entries()) {
    
  

    let temp = `<button onclick = "remove_item('${id}')">-</button>
    <div class="div-proizvod">
        <img src="${item.image}" alt="${item.name}" />
        <p>${item.name}</p>
        <p>Quantity : ${quantity}</p>
        <p>id : ${id}</p>
    </div>
    <button onclick = "add_item('${id}')">+</button>
  `;
    output.push(temp);
  }

  return output;
}


function change_shoppingcart_items(){
  update_shoppingcart();


  // Display cart contents
  console.log("🛒 Shopping Cart:");
  for (const [id, { item, quantity }] of shopping_cart.entries()) {
    console.log(`Product ID: ${id}, Name: ${item.name}, Quantity: ${quantity}`);
  }

  const lista = document.querySelector("#shopping_cart_items");
  lista.innerHTML = "";
  
  let items = generate_shoopingcart_HTML();
  

  for(let i = 0; i < items.length; i++){
    const el = document.createElement("li");
    el.innerHTML = items[i];
    lista.appendChild(el);
  }


}

//TODO pregledaj me
function add_item(id){

  let {item,quantity} = shopping_cart.get(id);
  quantity++;
  console.log(quantity);
  shopping_cart.set(id,{item,quantity});
  //ovo treba jer ako bi refreshao samo bi se izbrisala ta promjena na shoppingcart
  //mapi a to nije dobro
  save_shoppingcart();
  change_shoppingcart_items();

}


function remove_item(id){

  let {item,quantity} = shopping_cart.get(id);
  if(quantity === 1){

    shopping_cart.delete(id);

  }else{
    quantity--;
    shopping_cart.set(id,{item,quantity});
  }
  save_shoppingcart();
  change_shoppingcart_items();

}

//pokreni dok se pokrene html stranica
change_shoppingcart_items();


/*
`
  <button onlckick = "remove_item('${encodeURIComponent(JSON.stringify(item))}')">-</button>
  <div class="div-proizvod">
      <img src="images/beton.jpg" alt="beton" />
      <p>beton</p>
      <p>Građevina</p>
  </div>
  <button onlckick = "remove_item('${encodeURIComponent(JSON.stringify(item))}')">+</button>
`
*/
