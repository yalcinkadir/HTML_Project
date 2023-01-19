class Schueler {
    constructor(schuelerName, note, alter) {
        this.schuelerName = schuelerName;
        this.note = note;
        this.alter = alter;
        this.schule = null;
        this.lehrer = [];
    }


    addLehrer(lehrer){
        this.lehrer.push(lehrer);
    }

    printSchueler(){
        let toString = `Schüler: ${this.schuelerName}, Note: ${this.note}, Alter: ${this.alter}, Schule: ${this.schule}`;
        console.log(`Schüler: ${this.schuelerName}, Note: ${this.note}, Alter: ${this.alter}, Schule: ${this.schule}`);
        for (const x of this.lehrer){
            toString += `Lehrer: ${x.lehrerName}, Erfahrung: ${x.erfahrung}`;
        }

        return toString;
    }

    printLehrer(){
        let toLehrerString = "";
        for (const x of this.lehrer){
            toLehrerString += `Lehrer: ${x.lehrerName}, Erfahrung: ${x.erfahrung}`;
        }
        return toLehrerString;
    }

    setSchule(schule){
        this.schule = schule;
    }
}