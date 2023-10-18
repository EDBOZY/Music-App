import React from 'react'

function DownloadAds() {
    const design='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'

  return (
    <div className="download">
        <div className="images flex">
        <img
          src={require("../img/App Store.png")}
          alt="" className={design}
          
        />
        <img
          src={require("../img/Google Play.png")}
          alt="" className={design}
          
        /> 
        </div>
    </div>
  )
}

export default DownloadAds