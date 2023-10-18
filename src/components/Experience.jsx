import React from 'react'
import Features from './Features'

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] rounded-b-[5rem] relative z-[2]">
        
        <img src={require("../img/Path 318.png")} alt=""  className='w-[5rem]'/>
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>Music Experience</b>
            </span>
        </div>
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Features icon="Group 2" title="For Live Music" />
            <Features icon="music icon" title="For Daily Music" />
            <Features icon="Group 4" title="For Artists" />
        </div>
    </div>
  )
}

export default Experience