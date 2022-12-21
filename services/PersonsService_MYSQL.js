const testdbConnection = require("../utils/DbUtils");

module.exports = {
    getAllPersons: function () {
        return testdbConnection.execute("SELECT * FROM Persons");
    },
    addPerson: function (obj) {
        return testdbConnection
            .execute("INSERT INTO Persons (LastName, FirstName, Age) VALUES (?,?,?)", [obj.LastName, obj.FirstName, obj.Age]);
    },
    updatePerson: function (obj) {
        return testdbConnection
            .execute("UPDATE Persons SET LastName = ?, FirstName = ?, Age = ? WHERE Personid = ?", [obj.LastName, obj.FirstName, obj.Age, obj.Personid]);
    },
    deletePerson: function (obj) {
        return testdbConnection
            .execute("DELETE FROM Persons WHERE Personid = ?", [obj.Personid]);
    }
}