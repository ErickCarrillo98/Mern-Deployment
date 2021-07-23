const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pets_db",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO pets_db"))
.catch(err => console.log("ERROR: ", err))