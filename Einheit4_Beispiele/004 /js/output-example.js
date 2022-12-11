function displayEnglishText(name){
    let output = document.getElementById("output-area");

    output.innerHTML = "<p>Hi "+name+".</p>";
    output.innerHTML += "How are you today?";
    output.innerHTML += "<br />Welcoome to JavaScript!";
}

function displayGermanText(name, politeForm){
    let output = document.getElementById("output-area");

    if(politeForm) {
        output.innerHTML = "<p>Grüß Gott "+name+".</p>";
        output.innerHTML += "Wie geht es Ihnen heute?";
    } else {
        output.innerHTML = "<p>Hallo "+name+".</p>";
        output.innerHTML += "Wie geht es dir heute?";
    }

    output.innerHTML += "<br />Willkommen bei JavaScript!";
}

//diese Funktion wird mittels "onclick" Attribut auf dem Button festgelegt und ausgeführt
//wenn eben der Button geklickt wurde.
function displayText(){

    let name = document.getElementsByName("username")[0].value;
    //das ist ja der neue JavaScript Standard: das geht eh so :) Das kommt dabei raus, wenn man nur mehr in Frameworks arbeitet und selten native JS verwendet
    let speaksEnglish =  document.getElementsByName("language")[0].value;

    if(speaksEnglish == "EN") {
        displayEnglishText(name);
    } else {
        //mite dem Attribut checked, sehen Sie ob die Checkbox angehakt wurde.
        let politeForm =  document.getElementsByName("polite-form")[0].checked;
        displayGermanText(name, politeForm);
    }
}