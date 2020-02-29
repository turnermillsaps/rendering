
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(pokerHand)}</code>
        </div>
    ` */

    var currentHand = pokerHand.map(function(e){
        return `
            <div>
                <img src="cards/${e.value}${e.suit}.png" />
            </div>
        `
    })

    return currentHand;
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}