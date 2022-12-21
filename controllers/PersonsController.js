const personsService_FILE = require("../services/PersonsService_FILE");
const personsService_MYSQL = require("../services/PersonsService_MYSQL");

module.exports = {
    getAllPersons_FILE: function (request, response, next) {
        personsService_FILE.getAllPersons().then((value) => {
            response.send(value);
        }).catch((reason) => {
            response.send("Check console for error");
            console.log(reason);
        })
    },
    getPersonByID_FILE: function (request, response, next) {
        personsService_FILE.getPersonByID(request.params.ID).then((value) => {
            response.send(value);
        }).catch((reason) => {
            response.send("Check console for error");
            console.log(reason);
        })
    },
    addPerson_FILE: function (request, response, next) {
        personsService_FILE.addPerson(request.body).then((value) => {
            if (value)
                response.send("New person(s) added.");
        }).catch((reason) => {
            response.send("Check console for error");
            console.log(reason);
        })
    },
    getAllPersons_MYSQL: function (request, response, next) {
        personsService_MYSQL.getAllPersons().then(([persons]) => {
            response.status(200).send(persons);
        }).catch(error => {
            response.status(500).send(error);
        })
    },
    addPerson_MYSQL: function (request, response, next) {
        personsService_MYSQL.addPerson(request.body).then((value) => {
            response.status(200).send("New person added.");
        }).catch((error) => {
            response.status(500).send(error);
        })
    },
    updatePerson_MYSQL: function (request, response, next) {
        personsService_MYSQL.updatePerson(request.body).then((value) => {
            response.status(200).send("Person updated.");
        }).catch((error) => {
            response.status(500).send(error);
        })
    },
    deletePerson_MYSQL: function (request, response, next) {
        personsService_MYSQL.deletePerson(request.body).then((value) => {
            response.status(200).send("Person deleted.");
        }).catch((error) => {
            response.status(500).send(error);
        })
    }
}
