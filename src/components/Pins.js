import React, { useState } from "react";
import useFetch from "../useFetch";
import Pin from "./Pin";
import "../assets/scss/pins.scss";
import Modal from "./Modal";

const Pins = () => {
    const { data, loading } = useFetch("https://picsum.photos/v2/list");
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <section>
            <div className="pin-container">
                {data &&
                    data.map((pin) => (
                        <Pin
                            img={pin.download_url}
                            pinTitle={pin.author}
                            loading={loading}
                            pinId={pin.id}
                        />
                    ))}
            </div>
            {openModal ? <Modal closeModal={closeModal} /> : ""}
            <button onClick={() => setOpenModal(!openModal)}>Modal</button>
            {loading && "yükleniyor..."}
        </section>
    );
};

export default Pins;
