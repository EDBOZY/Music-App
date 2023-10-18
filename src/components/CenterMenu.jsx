import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer "

  return (
    <div className="menu flex">
        <ul className="flex justify-between w-[100%] ">
            <li className={liStyle}><b>Home</b></li>
            <li className={liStyle}><b>About</b></li>
            <li className={liStyle}><b>Performer</b></li>
            <li className={liStyle}><b>Event Schedule</b></li>
        </ul>
    </div>
  );
};

export default CenterMenu


