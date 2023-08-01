import React, { useState } from 'react'

const Skill = ({ skills }) => {
    const [isEnable, setIsEnable] = useState(false)
    return (
        <div>
            <ul>
                {skills ? skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                }
                ): <h2>Testing Tutorial</h2> }
            </ul>
            {isEnable ? <button>start learning</button> //This element is not rendered until isEnable state is false [So this element is not present in DOM until isEnable is false] so simple getBy() is not not work with this element while testing we need to use queryBy() for the testing not present DOM elements 
             : <button onClick={()=>setIsEnable(true)}>Login</button>//the isEnable state is by default false so this button element is rendered and present in DOM 
            }
        </div>
    )
}

export default Skill