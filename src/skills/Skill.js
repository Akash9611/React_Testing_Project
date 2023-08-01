import React, { useEffect, useState } from 'react'

const Skill = ({ skills }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)
        },1001)
    },[]) // after 500 milliseconds the isLoggedIn is set to true automatically. It means the 'start learning button' will get present after 500 milliseconds //!findBy()

    return (
        <div>
            <ul>
                {skills ? skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                }
                ): <h2>Testing Tutorial</h2> }
            </ul>
            {isLoggedIn ? <button>start learning</button> //This element is not rendered until isLoggedIn state is false [So this element is not present in DOM until isLoggedIn is false] so simple getBy() is not not work with this element while testing we need to use queryBy() for the testing not present DOM elements 
             : <button onClick={()=>setIsLoggedIn(true)}>Login</button>//the isLoggedIn state is by default false so this button element is rendered and present in DOM 
            }
        </div>
    )
}

export default Skill