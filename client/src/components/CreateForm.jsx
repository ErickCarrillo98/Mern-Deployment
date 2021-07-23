import React, {useState} from 'react'
import axios from "axios"
import {Link, navigate} from "@reach/router"


const CreateForm = props => {

    const [formState, setFormState] = useState({
        name:"",
        type:"",
        description:"",
        skill: "",
        skill2:"",
        skill3:""
    })

    const [validState, setValidState] = useState({})

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets/new", formState)
            .then(res => navigate("/"))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return(
    <div>
        <h3>Know a pet needing a home?</h3>
        <Link to="/">Back to Home</Link>
        <form onSubmit={submitHandler}>
            <p>Pet Name:
                <input type="text" name="name" id="" onChange={changeHandler}/>
                {(validState.name) ? <p>{validState.name}</p>: null}
            </p>
            <p>Pet Type:
                <input type="text" name="type" id="" onChange={changeHandler}/>
                {(validState.type) ? <p>{validState.type}</p>: null}
            </p>
            <p>Pet Description:
                <input type="text" name="description" id="" onChange={changeHandler}/>
                {(validState.description) ? <p>{validState.description}</p>: null}
            </p>
            <p>SKILLS (Optional) </p>
            <p>Skills 1:
                <input type="text" name="skill" id="" onChange={changeHandler}/>
                
            </p>
            <p>Skills 2:
                <input type="text" name="skill2" id="" onChange={changeHandler}/>
                
            </p>
            <p>Skills 3:
                <input type="text" name="skill3" id="" onChange={changeHandler}/>
                
            </p>
            <button type="submit">Add Pet</button>
        </form>
    </div>

    )

}
export default CreateForm