import React from "react"


export default function Projects ({project}){
  return (
    <div>
<div className="card">
                <img src={project.image} alt="Projects"/>
                <h2>{project
                .name}</h2>
                <button id="GitHub">GitHub</button>
            </div>
    </div>


    
    )

  
}