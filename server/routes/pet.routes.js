const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/api/test", PetController.test)
    app.get("/api/pets", PetController.allPets)
    app.post("/api/pets/new", PetController.createPet)
    app.get("/api/pets/:id", PetController.findOnePet)
    app.put("/api/pets/:id", PetController.updatePet)
    app.delete("/api/pets/:pet_id", PetController.deletePet)
}