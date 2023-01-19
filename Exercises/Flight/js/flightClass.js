class FlightClass{
    constructor(flightNr, fromCity, toCity, FlightDate, maxPassenger) {
        this.flightNr = flightNr
        this.fromCity = fromCity
        this.toCity = toCity
        this.FlightDate = FlightDate
        this.maxPassenger = maxPassenger
        this.passengerList = []
    }

    createPassenger(passengerName, passengerAge){
        this.passengerList.push(new PassengerClass(passengerName, passengerAge));
    }

    printPassengerInfo(){
        let toPassengerString = "";
        for (const x of this.passengerList){
            toPassengerString += `Passenger Name: ${x.passengerName}, Age: ${x.passengerAge}`;
        }

        document.getElementById("showPassengers"+this.flightNr).innerHTML = toPassengerString;
        return toPassengerString;
    }

}
