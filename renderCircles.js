/*
    Current Issues:
    - N/A, finished this one
*/
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(circles)}</code>
        </div>
    ` */
    var circle = circles.map(function(e){
        return `
            <div style="border-radius: 50%; height: ${e.radius}px; width: ${e.radius}px; background-color: ${e.color}"></div>
        `
    })
    return circle.join(' ');
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}