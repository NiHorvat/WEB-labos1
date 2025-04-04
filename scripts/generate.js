import data from './data.js';

//returns a list of HTML string
//TODO dodati da ovisi o kategoriji, neki svič kejs
export function generate_items_HTML(category_id){

    let output = [];

    for(let category of data.categories){
        //console.log(category["name"]);

        for(let item of category["products"]){
            //console.log(item);

            let temp = `<div><img src="${item.image}" alt="${item.name}"><p>${item.name}</p><p>${category.name}</p></div>`;

            output.push(temp);
        }
    }
    return output;
}



/*
<div>
<img src="images/beton.jpg" alt="beton">
<p>
    beton
</p>
<p>
    građevinska roba
</p>
</div>
*/


console.log(generate_items_HTML("l","l"));

