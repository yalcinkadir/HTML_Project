require(['js/objects'], function (objects) {
    istanbul = new Objects(2020, "Istanbul")
    vienna = new Objects(1990, "Vienna")
    dubai = new Objects(2010, "Dubai")
});
require(['js/person'], function (person) {});

function managePerson(city){
    const personName = document.getElementById("inputPName"+city.objectAddress).value;
    const personId = document.getElementById("inputPId"+city.objectAddress).value;

    city.createPerson(personName, personId);
    /* person
    if(person.personList.length === 2) {
        document.getElementById('addButtonPerson').disabled = true;
    } */

}

