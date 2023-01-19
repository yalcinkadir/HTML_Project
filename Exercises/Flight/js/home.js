require(['js/flightClass'], function (flightClass) {
    flight1 = new FlightClass(1);
    flight2 = new FlightClass(2);
});
require(['js/passengerClass'], function (passengerClass) {});

function managePassenger(flight){
    const passengerName = document.getElementById("inputPName"+flight.flightNr).value;
    const passengerAge = document.getElementById("inputPAge"+flight.flightNr).value;

    flight.createPassenger(passengerName, passengerAge);
    if(flight.passengerList.length === 2) {
        document.getElementById('addButtonFlight'+flight.flightNr).disabled = true;
    }

}