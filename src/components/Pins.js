import React, { useState } from "react";
import Pin from "./Pin";
import "../assets/scss/pins.scss";
import Modal from "./Modal";
/* 
const pins = [
    {
        img: "https://www.stylevore.com/wp-content/uploads/2019/12/dd9a0b178c0adb52585c65ce9aaee01a.png",
        pinTitle: "Test1"
    },
    {
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fwapg3iJE9Es%2Fmaxresdefault.jpg&f=1&nofb=1",
        pinTitle: "Test2"
    },
    {
        img: "https://www.stylevore.com/wp-content/uploads/2020/02/66137902_179902396360410_5388654880006154942_n.jpg",
        pinTitle: "Test3"
    },
    {
        img: "https://www.stylevore.com/wp-content/uploads/2019/12/69434346_223175335334879_526332407835208996_n.jpg",
        pinTitle: "Test4"
    },
    {
        img: "https://allseasonsstyle.com/wp-content/uploads/2019/04/62b4c20f4023f81f81a5a943591f104f.jpg?ezimgfmt=ng:webp/ngcb2",
        pinTitle: "Test5"
    },
    {
        img: "https://www.stylevore.com/wp-content/uploads/2019/12/dd9a0b178c0adb52585c65ce9aaee01a.png",
        pinTitle: "Test1"
    },
    {
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fwapg3iJE9Es%2Fmaxresdefault.jpg&f=1&nofb=1",
        pinTitle: "Test2"
    },
    {
        img: "https://www.stylevore.com/wp-content/uploads/2020/02/66137902_179902396360410_5388654880006154942_n.jpg",
        pinTitle: "Test3"
    },
    {
        img: "https://www.stylevore.com/wp-content/uploads/2019/12/69434346_223175335334879_526332407835208996_n.jpg",
        pinTitle: "Test4"
    },
    {
        img: "https://allseasonsstyle.com/wp-content/uploads/2019/04/62b4c20f4023f81f81a5a943591f104f.jpg?ezimgfmt=ng:webp/ngcb2",
        pinTitle: "Test5"
    }
];

 */

const Pins = ({pins, loading}) => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () =>{
        setOpenModal(false)
    }
    return (
        <section>
            <div className="pin-container">
                {pins.map((pin) => (
                    <Pin img={pin.download_url} pinTitle={pin.author} loading={loading} />
                ))}
            </div>
            {openModal ? <Modal closeModal={closeModal} /> : ""}
            <button onClick={() => setOpenModal(!openModal)}>Modal</button>
        </section>
    );
};

export default Pins;
