
function renderNametags(nametags) {
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(nametags)}</code>
        </div>
    ` */

    var nameDivs = nametags.map(function(e){
        return `
            <div name="${e}">${e}</div>
        `
    });
    
    return nameDivs.join('');
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}