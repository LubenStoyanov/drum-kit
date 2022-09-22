import React from "react";

function SoundsKat({menuItem}) {
    return (
        <>
            {
            menuItem.map((item) =>{
                return <div className="item-container" key={item.id}>
                    <p className="item-sounds">{item.filename}</p>
                </div>
                })
            }
        </>
    )
}

export default SoundsKat;