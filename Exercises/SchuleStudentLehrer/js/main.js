require(['js/schueler'], function (schueler) {});
require(['js/lehrer'], function (lehrer) {});
require(['js/schule'], function (schule) {});

class Main {
    constructor() {
      /*
      this.schüler = new Schueler("Max Mustermann", "A", 18);
      this.lehrer1 = new Lehrer("Herr Müller", "10 Jahre");
      this.lehrer2 = new Lehrer("Gülsün Sahin", "Senior");
      this.schule = new Schule("Gymnasium Musterstadt", "Musterstraße 1, 12345 Musterstadt");
      this.schüler.addLehrer(this.lehrer1);
      this.schüler.setSchule(this.schule);
      */
      this.schulerList = [];
      this.lehrerList = [];
      this.schuleList = [];
       }
    
    printInformation() {
       /*console.log(`Lehrer: ${this.lehrer1.lehrerName}, Erfahrung: ${this.lehrer1.erfahrung}`);
      console.log(`Schule: ${this.schule.schuleName}, Adresse: ${this.schule.address}`);
      document.getElementById("print").innerHTML = this.schüler.printSchueler() + "\n" + this.schüler.printLehrer(); */

      let toString = "STUDENT<br></br>";
      for (const x of this.schulerList){
        toString += x.printSchueler() ; 
      }
      toString += "<br></br>LEHRER<br></br>" 
      for (const x of this.lehrerList){
        toString += x.printLehrer(); 
      }

      document.getElementById("print").innerHTML = toString;
    }

    createSchuler(Schulername, alter, note) {
        this.schulerList.push(new Schueler(Schulername, note, alter));
    }

    createLehrer(lname, lerfahrung){
      this.lehrerList.push(new Lehrer(lname, lerfahrung));
    }
    
}

let testObj = new Main();

function manageStudent(){
  const fname = document.getElementById("fname").value;
  const alter = document.getElementById("alter").value;
  const note = document.getElementById("note").value;

  testObj.createSchuler(fname, alter, note);
}

function manageLehrer(){
  const lname = document.getElementById("lname").value;
  const lerfahrung = document.getElementById("lerfahrung").value;

  testObj.createLehrer(lname, lerfahrung);
}