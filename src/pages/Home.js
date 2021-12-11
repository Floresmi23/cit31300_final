/*
import React from "react";
*/
import React, { useState } from 'react';
import Popup from '../Popups/Popup';
import Popup2 from '../Popups/Popup2';
import Popup3 from '../Popups/Popup3';
import Popup4 from '../Popups/Popup4';

function Home(){

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [isOpen2, setIsOpen2] = useState(false);

    const togglePopup2 = () => {
        setIsOpen2(!isOpen2);
    }

    const [isOpen3, setIsOpen3] = useState(false);

    const togglePopup3 = () => {
        setIsOpen3(!isOpen3);
    }

    const [isOpen4, setIsOpen4] = useState(false);

    const togglePopup4 = () => {
        setIsOpen4(!isOpen4);
    }





    return(
        <div>
            
            <div class="div1">
                <img src="https://www.hgworld.in/wp-content/uploads/2020/11/series-x.jpg" alt="xbox"/>
                <h1>Name: Xbox series X</h1>
                <h2>Stock: 5</h2>
                <h3>Price: $550</h3>
                <input
                    type="button"
                    value="Click here to find out more information!"
                    onClick={togglePopup}
                />
                {isOpen && <Popup
                    content={<>
                        <img src="https://www.hgworld.in/wp-content/uploads/2020/11/series-x.jpg" alt="xbox"/>
                        <h1> </h1>
                        <b>Xbox series X</b>
                        <p>Stock: 5</p>
                        <p>Price: $550</p>
                        <button>Add to cart</button>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>

            {/*TESTING TOP ONE*/}

            {/*<button type="button"*/}
            {/*        className="btn btn-default btn-sm">*/}
            {/*    <span className="glyphicon*/}
            {/*        glyphicon-shopping-cart">*/}
            {/*    </span>*/}
            {/*    <b> Add to Cart </b>*/}
            {/*</button>*/}



            <div class="div2">
                <img src="https://rafflecreator.s3.amazonaws.com/f52fce0f-f64d-4c56-a3d3-9d40600b7e36.jpeg" alt="PS5"/>
                <h1>Name: PlayStation 5</h1>
                <h2>Stock: 12</h2>
                <h3>Price: $600</h3>
                <input
                    type="button"
                    value="Click here to find out more information!"
                    onClick={togglePopup2}
                />
                {isOpen2 && <Popup2
                    content={<>
                        <img src="https://rafflecreator.s3.amazonaws.com/f52fce0f-f64d-4c56-a3d3-9d40600b7e36.jpeg" alt="ps5"/>
                        <h1> </h1>
                        <b>PlayStation 5</b>
                        <p>Stock: 12</p>
                        <p>Price: $600</p>
                        <button>Add to cart</button>
                    </>}
                    handleClose={togglePopup2}
                />}
            </div>






            <div className="div3">
                <img src="https://tse3.mm.bing.net/th?id=OIP.8abzeN1AMBjxkI2QiT4pwgHaHH&pid=Api&P=0&w=181&h=175" alt="OLED"/>
                <h1>Name: Nintendo Switch OLED</h1>
                <h2>Stock: 20</h2>
                <h3>Price: $350</h3>
                <input
                    type="button"
                    value="Click here to find out more information!"
                    onClick={togglePopup3}
                />
                {isOpen3 && <Popup3
                    content={<>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.8abzeN1AMBjxkI2QiT4pwgHaHH&pid=Api&P=0&w=181&h=175" alt="Nintendo Switch OLED"/>
                        <h1> </h1>
                        <b>Nintendo Switch OLED</b>
                        <p>Stock: 20</p>
                        <p>Price: $350</p>
                        <button>Add to cart</button>
                    </>}
                    handleClose={togglePopup3}
                />}

            </div>


            <div className="div4">
                <img src="https://i1.wp.com/www.ultimatepocket.com/wp-content/uploads/2020/11/oculus-quest-2-review-20.jpg?resize=640%2C490&ssl=1" alt="Quest 2"/>
                <h1>Name: Oculus Quest 2</h1>
                <h2>Stock: 3</h2>
                <h3>Price: $300</h3>
                <input
                    type="button"
                    value="Click here to find out more information!"
                    onClick={togglePopup4}
                />
                {isOpen4 && <Popup4
                    content={<>
                        <img src="https://i1.wp.com/www.ultimatepocket.com/wp-content/uploads/2020/11/oculus-quest-2-review-20.jpg?resize=640%2C490&ssl=1" alt="Oculus Quest 2"/>
                        <h1> </h1>
                        <b>Oculus Quest 2</b>
                        <p>Stock: 3</p>
                        <p>Price: $300</p>
                        <button>Add to cart</button>
                    </>}
                    handleClose={togglePopup4}
                />}

            </div>


        </div>
    )
}

export default Home;