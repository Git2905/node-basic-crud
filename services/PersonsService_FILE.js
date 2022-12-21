const fileSystem = require("fs");
const filePath = "./files/Persons.json";

module.exports = {
    getAllPersons: function () {
        let promise = new Promise((resolve, reject) => {
            fileSystem.readFile(filePath, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    try {
                        let jsonData = JSON.parse(data);
                        resolve(jsonData);
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });

        return promise;
    },
    getPersonByID: function (personID) {
        let promise = new Promise((resolve, reject) => {
            fileSystem.readFile(filePath, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    try {
                        let jsonData = JSON.parse(data);
                        let person = jsonData.find(p => p.ID == personID);

                        resolve(person);
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });

        return promise;
    },
    addPerson: function (obj) {
        let promise = new Promise((resolve, reject) => {
            this.getAllPersons().then((value) => {
                let persons = value ? value : [];
                persons = persons.length ? persons : [persons];

                if (obj.length) {
                    for (let person of obj) {
                        persons.push(person);
                    }
                }
                else
                    persons.push(obj);

                fileSystem.writeFile(filePath, JSON.stringify([...persons]), (error) => {
                    if (error) {
                        reject(error);
                    }
                    else
                        resolve(true);
                })
            }).catch((reason) => {
                reject(reason);
            });
        });

        return promise;
    }
}