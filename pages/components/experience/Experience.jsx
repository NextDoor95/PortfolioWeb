import React from 'react'
import Image from 'next/image'

import Soldier from 'public/soldier.jpeg'

function Experience() {
    return (
    <div className="experience" id="experience">
        <div className="title">
            <h1>
                Experiencia
            </h1>
        </div>

        <div>
            <div className="projects">
                <div className="individualproject">
                    <Image 
                        src={Soldier}
                        alt="Soldier photo"
                        id='logo'
                        width={300}
                        height={300}
                        className="imgproject"
                    />
                    <div className="glassBox">
                        lorem ipsum lorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                    </div>
                </div>
                <div className="individualproject">
                    <Image 
                        src={Soldier}
                        alt="Soldier photo"
                        id='logo'
                        width={300}
                        height={300}
                        className="imgproject"
                    />
                    <div className="glassBox">
                        lorem ipsum lorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default Experience