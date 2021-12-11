// import React from "react";
import React, { useState } from "react"


function Television(){


    const [cname, setCname] = useState("")
    const [dname, setDname] = useState("")
    const [ename, setEname] = useState("")
    const [gname, setGname] = useState("")

    const handleChange = e => {
        setCname(e.target.value)
    }

    const handleChange2 = e => {
        setDname(e.target.value)
    }

    const handleChange3 = e => {
        setEname(e.target.value)
    }

    const handleChange4 = e => {
        setGname(e.target.value)
    }






    return(


        <div>
            <h1>Add item</h1>
            <form>
                <label>
                    Name:{" "}
                    <input type="text" value={cname} onChange={handleChange} />
                </label>
            </form>
            <form>
                <label>
                    Stock:{" "}
                    <input type="text" value={dname} onChange={handleChange2} />

                </label>
            </form>
            <form>
                <label>
                    Price: ${" "}
                    <input type="text" value={ename} onChange={handleChange3} />

                </label>
            </form>
            <form>
                <label>
                    Image Src:{" "}
                    <input type="src" value={gname} onChange={handleChange4} />

                </label>
            </form>

            <h5>Name: {cname}</h5>
            <h5>Stock: {dname}</h5>
            <h5>Price: ${ename}</h5>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={gname} alt="image"/>
        </div>

    )
}

export default Television;