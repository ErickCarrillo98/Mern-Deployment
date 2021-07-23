
const mongoose = require("mongoose")

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true, "PET NAME MUST BE SUPPLIED"],
        minlength: [3, "Pet name must be at least 3 characters"]
    },
    type: {
        type: String,
        required : [true, "PET TYPE REQUIRED"],
        minlength: [3, "Pet type must be at least 3 characters"]
        
    },
    description: {
        type: String,
        required : [true, "DESCRIPTION MUST BE REQUIRED"],
        minlength: [3, "Pet description must be at least 3 characters"]
    },
    skill: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps : true})

const Pet = mongoose.model("Pet", PetSchema)
module.exports = Pet