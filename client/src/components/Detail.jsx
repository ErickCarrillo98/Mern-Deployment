import React, {useEffect, useState} from "react"
import {Link, navigate} from "@reach/router"
import axios from "axios"


const Detail = props => {

    const {pet_id} = props

    const [pet, setPet] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${pet_id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = pet_id => {
        axios.delete("http://localhost:8000/api/pets/" + pet_id)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
    <div>
        <h1>Details about {pet.name} </h1>
        <Link to="/">Back to home</Link>
        <button onClick={() => deleteHandler(pet._id)}>Adopt {pet.name}</button>
        <p>Pet Type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>Skills: {pet.skill} {pet.skill2} {pet.skill3}</p>

    </div>

    )
}
export default Detail