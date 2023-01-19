class Mensch{
    constructor(vorname, nachname){
        this.vorname = vorname;
        this.nachname = nachname;

    }

    sagHallo(){
        console.log('Hallo, mein Name ist ' + this.vorname);
    }

    getVollername(){
        return '${this.vorname} ${this.nachname}';
    }

}

let mensch1 = new Mensch('Max', 'Mustermann');
mensch1.sagHallo();
mensch1.getVollername();