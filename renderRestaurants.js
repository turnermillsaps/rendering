
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(restaurants)}</code>
        </div>
    ` */

    var restArr = restaurants.map(function(e){
        var dollarSign = "";
        for (var i = 0; i < e.priceRating; i++) {
            dollarSign += "$";
        }

        return `
                    <div class="card col-3 m-2">
                        <div class="card-body">
                            <h2 class="card-title">${e.name}</h2>
                            <p class="card-text">${e.type}</p>
                            <p class="card-text" style="color: green;">${dollarSign}</p>
                        </div>
                    </div>
        `
    }) 

    var restCards = restArr.join('');
    var restContainer = `
        <div class="container-fluid">
            <div class="row">${restCards}</div>
        </div>
    `;
    return restContainer;
    
   
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}