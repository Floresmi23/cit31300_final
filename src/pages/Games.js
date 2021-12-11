import React, {useState} from "react";

function Games(){

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [aname, setAname] = useState("")
    const [bname, setBname] = useState("")

    const handleChange = e => {
        setFname(e.target.value)
    }

    const handleChange2 = e => {
        setLname(e.target.value)
    }

    const handleChange3 = e => {
        setAname(e.target.value)
    }

    const handleChange4 = e => {
        setBname(e.target.value)
    }



    return(
            <div>
                <h1> </h1>
                <img src="https://www.hgworld.in/wp-content/uploads/2020/11/series-x.jpg" alt="xbox"/>
                <h1>Name: Xbox series X</h1>
                <h2>Stock: 5</h2>
                <h3>Price: $550</h3>
                <h1>----------------</h1>
                <form>
                    <label>
                        Enter your Stock for Xbox's:{" "}
                        <input type="text" value={fname} onChange={handleChange} />
                    </label>
                </form>
                <h1>----------------------------------------</h1>

                <h1>  </h1>

                <img src="https://rafflecreator.s3.amazonaws.com/f52fce0f-f64d-4c56-a3d3-9d40600b7e36.jpeg" alt="PS5"/>
                <h1>Name: PlayStation 5</h1>
                <h2>Stock: 12</h2>
                <h3>Price: $600</h3>
                <h1>----------------</h1>
                <form>
                    <label>
                        Enter your Stock for PS5's:{" "}
                        <input type="text" value={lname} onChange={handleChange2} />

                    </label>
                </form>
                <h1>----------------------------------------</h1>

                <h1> </h1>

                <img src="https://tse3.mm.bing.net/th?id=OIP.8abzeN1AMBjxkI2QiT4pwgHaHH&pid=Api&P=0&w=181&h=175" alt="OLED"/>
                <h1>Name: Nintendo Switch OLED</h1>
                <h2>Stock: 20</h2>
                <h3>Price: $350</h3>
                <h1>----------------</h1>
                <form>
                    <label>
                        Enter your stock for Switch's:{" "}
                        <input type="text" value={aname} onChange={handleChange3} />

                    </label>
                </form>
                <h1>----------------------------------------</h1>

                <h1> </h1>

                <img src="https://i1.wp.com/www.ultimatepocket.com/wp-content/uploads/2020/11/oculus-quest-2-review-20.jpg?resize=640%2C490&ssl=1" alt="Quest 2"/>
                <h1>Name: Oculus Quest 2</h1>
                <h2>Stock: 3</h2>
                <h3>Price: $300</h3>
                <h1>----------------</h1>
                <form>
                    <label>
                        Enter your Stock for Quest's:{" "}
                        <input type="text" value={bname} onChange={handleChange4} />

                    </label>
                </form>
                <h1>----------------------------------------</h1>

                <h1> </h1>

                <h5>Cost for xbox's: ${fname * 550}</h5>
                <h5>Cost for PS5's: ${lname *600}</h5>
                <h5>Cost for Switch's: ${aname * 350}</h5>
                <h5>Cost for Quest's: ${bname * 300}</h5>
                <h1>------------------------------------------------------</h1>
                <h1>Grand total: ${(fname * 550)+(lname *600)+(aname * 350)+(bname * 300)}</h1>
                <h1>------------------------------------------------------</h1>
                <h1> </h1>



            </div>



    )
}

export default Games;