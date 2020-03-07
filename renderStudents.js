/*
    Current Issues:
    - Misunderstood exercise and didn't see example pictures, this needs major styling
*/
function renderStudents(students) {
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(students)}</code>
        </div>
    ` */

    var attendance = students.map(function(e){
        return `
            <div>
                Student: ${e.name}<br>
                Present: ${e.isPresent}
            </div>
            <br>
        `
    });

    return attendance.join('');
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}