const express = require("express");
const router = express.Router();

const personsController = require("../controllers/PersonsController");

router.get("/file/all", personsController.getAllPersons_FILE);
router.get("/file/byid/:ID", personsController.getPersonByID_FILE);
router.post("/file/add", personsController.addPerson_FILE);
router.get("/mysql/all", personsController.getAllPersons_MYSQL);
router.post("/mysql/add", personsController.addPerson_MYSQL);
router.post("/mysql/update", personsController.updatePerson_MYSQL);
router.post("/mysql/delete", personsController.deletePerson_MYSQL);

module.exports = router;