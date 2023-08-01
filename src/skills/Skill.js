import React from 'react'

const Skill = ({skills}) => {
    
    return (
        <div>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                }
                )}
            </ul>
        </div>
    )
}

export default Skill