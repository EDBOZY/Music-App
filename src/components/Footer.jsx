import React from 'react'
import CenterMenu from './CenterMenu'
import {Facebook,Twitter,YouTube,LinkedIn} from "@material-ui/icons"
//import "./styles.css"

function Footer() {
    const design="rounded-full border-2 border-white p-2 mr-[5rem] "
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">

        <CenterMenu/>
        <div className='flex w-[100%] justify-center mt-14 p-5'>
            <div className={design}>
                <Facebook/>
                </div>
            <div className={design}>
                <Twitter/>   
            </div>
            <div className={design}>
                <YouTube/>  
            </div>
            <div className={design}>
                <LinkedIn/>
            </div>
        </div>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
        </span>
    </div>
  )
}

export default Footer