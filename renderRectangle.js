
function renderRectangle(rectangle) {
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(rectangle)}</code>
        </div>
    ` */
    var retRectangle = `
        <div style="width: ${rectangle.width}px; height: ${rectangle.height}px; background-color: ${rectangle.color}"></div>
    `
    return retRectangle;
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}