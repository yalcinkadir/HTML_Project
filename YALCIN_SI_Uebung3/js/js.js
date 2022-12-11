function totalBestellung() {

    event.preventDefault()

    let subtotal = 0
    let inputs = document.querySelectorAll('input,select')

    inputs.forEach(input => {
        if (input.checked){
            let inputvalue = parseFloat(input.value);
        if(document.querySelector("#quantity"+input.name) !== null){
            inputvalue = inputvalue * document.querySelector("#quantity"+input.name).value;
        }
        subtotal += inputvalue;}
    })

    let steuerSatz = parseFloat(subtotal * '.10');
    let total = parseFloat(subtotal + steuerSatz);

        let name = document.querySelector("#name").value;
        document.querySelector("#sayhello").innerHTML = "Hallo " + name + "<br />";
        document.querySelector("#subtotal").innerHTML = "Gesamt: € " + subtotal.toFixed(2);
        document.querySelector("#tax").innerHTML = "+" + "Steuer: €" + steuerSatz.toFixed(2);
        document.querySelector("#totalincltax").innerHTML = "Gesamt inkl. Steuer: €" + total.toFixed(2);
    if ( total > 10 ) {
        document.querySelector("#totalTax").innerHTML =
            "-"+"15% Rabatt: €" + (total * '.15').toFixed(2) + "<br />" + "Total: €" + (total * '.85').toFixed(2);

    }
    // else {
    //     document.querySelector("#totalTax").innerHTML = "Insgesamt inkl. Steuer: €" + total.toFixed(2);
    // }

}

function decrease(val) {
    let quantity = document.querySelector("#quantity"+val).value;
    if(quantity>0){
        document.querySelector("#quantity"+val).value = parseInt(quantity) - 1
    }
}

function increase(val) {
    let quantity = document.querySelector("#quantity"+val).value;
    document.querySelector("#quantity"+val).value = parseInt(quantity) + 1

}

function myFunction() {
   document.getElementById("geschenk").style.display = "block";
/*
    var elem = document.getElementById("geschenk");
    var checkBox = document.getElementById("burger-class");
    if (checkBox.checked == false) {
        elem.style.display = "none";
        elem.remove();
    } else {
        elem.style.display = "block";
    }*/
}
