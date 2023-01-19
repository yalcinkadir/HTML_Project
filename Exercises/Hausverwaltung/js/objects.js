class Objects{
    constructor(builtYear, objectAddress){
        this.builtYear = builtYear
        this.objectAddress = objectAddress
        this.personList = []
    }

    createPerson(personId, personName){
        this.personList.push(new Person(personId, personName));
    }

    printPersonInfo(){
        let toPersonString = "";
        for (const x of this.personList){
            toPersonString += `Person Name: ${x.personName}, ID: ${x.personId}`;
        }

        document.getElementById("showPerson"+this.objectAddress).innerHTML = toPersonString;
        return toPersonString;
    }

    removePersonFromList(personName, personId) {

        this.personList = this.personList.filter(function (item) {
            return item.personName !== personName && item.personId !== personId;
        })




    }

}

