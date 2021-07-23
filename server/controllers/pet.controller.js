const Pet = require("../models/pet.model")


module.exports.test = (req, res) => {
    res.json({
        message : "YOU GOT THIS!! BELIEVE in yourself"
    })
}

//ALL PETS
module.exports.allPets = (req, res) => {
    Pet.find({}).sort({type: "asc"})
        .then(allPets => res.json({allPets}))
        .catch(err => res.json({err}))
}

//Create
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({newPet}))
        .catch(err => {
            res.status(400).json(err)
        })
}

//get one
module.exports.findOnePet = (req, res) => {
    const{id} = req.params
    Pet.findOne({_id: id })
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
}

//update one
module.exports.updatePet = (req, res) => {
    const {id} = req.params
    Pet.findByIdAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

//delete

module.exports.deletePet = (req, res) => {
    const {pet_id} = req.params
    Pet.deleteOne({_id : pet_id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}