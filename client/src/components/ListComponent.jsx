import React, {useState, useEffect} from 'react'
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setListState(res.data.allPets))
            .catch(err => console.log(err))

    },[])

    return(
    <div>
        <h1>List</h1>
        <Link to="/pets/new">Add a pet to the Shelter</Link>
        <h3>These pets are looking for a good home</h3>
        <table>
            <th>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                {
                    listState.map((pet, i) => {
                        return(
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link> | 
                                    <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                                    
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </th>
        </table>


    </div>

    )

}
export default ListComponent