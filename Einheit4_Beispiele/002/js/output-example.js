
let name = "Thomas";
let language = "EN";
let politeForm = false;

function displayEnglishText(name){
    let output = document.getElementById("output-area");

    output.innerHTML = "<p>Hi "+name+"</p>";
    output.innerHTML += "How are you today?";
    output.innerHTML += "<br />Welcoome to JavaScript!";
}

function displayGermanText(name, politeForm){
    let output = document.getElementById("output-area");

    if(politeForm) {
        output.innerHTML = "<p>Grüß Gott "+name+"</p>";
        output.innerHTML += "Wie geht es Ihnen heute?";
    } else {
        output.innerHTML = "<p>Hallo "+name+"</p>";
        output.innerHTML += "Wie geht es dir heute?";
    }

    output.innerHTML += "<br />Willkommen bei JavaScript!";
}

if(language == "EN") {
    displayEnglishText(name);
} else {
    displayGermanText(name, politeForm);
}


/*
console.log(" ===================== ");
console.log("Hello World");
console.log("Wie geht es dir heute?");
console.log("Willkommen bei JavaScript!");
console.log(" ===================== ");
*/
