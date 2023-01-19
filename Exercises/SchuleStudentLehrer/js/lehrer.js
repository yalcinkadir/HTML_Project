class Lehrer{
    constructor(lehrerName, erfahrung) {
        this.lehrerName = lehrerName;
        this.erfahrung = erfahrung;
    }

    printLehrer(){
        return `Lehrer: ${this.lehrerName}, Erfahrung: ${this.erfahrung}`;
    }
}