let mainClass

require(['js/schueler'], function (schueler) {});
require(['js/lehrer'], function (lehrer) {});
require(['js/schule'], function (schule) {});
require(['js/main'], function (main) {
    mainClass = new Main();
});

function manageStudent(){
    const fname = document.getElementById("fname").value;
    const alter = document.getElementById("alter").value;
    const note = document.getElementById("note").value;

    mainClass.createSchuler(fname, alter, note);
}

function manageLehrer(){
    const lname = document.getElementById("lname").value;
    const lerfahrung = document.getElementById("lerfahrung").value;

    mainClass.createLehrer(lname, lerfahrung);
}

