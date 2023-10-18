import React from 'react'
import DownloadAds from './DownloadAds'

function Hero() {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        <div className="headings flex flex-col justify-center h-[100%] text-[3rem] items-start">
            <span>
                Experience The
            </span>
            <span>
                <b>Best Quality Music</b>
            </span>
            <span className="text-[15px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>

          <div>
            <span className="text-[13px]">
                Download now on IOS and Android
            </span>
            <DownloadAds/>
          </div>
        </div>
        <div className="images relative w-[50%] ">
            <img src={require("../img/backgraphics.png")} alt="" className='absolute top-[-8rem]  height-[10px] ' />
            <img src={require("../img/p 1.png")} alt="" className='absolute top-[-15rem] h-[34rem] left-[13rem]' />
            <img src={require("../img/p 2.png")} alt="" className='absolute left-[235px] top-[94px] w-[175px]'/>
            <img src={require("../img/p 3.png")} alt=""  className='absolute w-[5rem] left-[13rem] top-[12rem]'/>
            <img src={require("../img/p 4.png")} alt="" className='absolute w-[5rem] left-[12.5rem] top-[12rem]' />
        </div>
    </div>
  )
}

export default Hero