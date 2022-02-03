import React from "react";
import "../assets/scss/modal.scss"

const Modal = ({closeModal}) => {

    const stopCapturingAndCloseModal = (e) =>{
        if(e.target.className === "modal-container"){
            closeModal()
        }
        
    }
    return (
        <div className="modal-container" onClick={stopCapturingAndCloseModal}>
            <div className="modal">
                <div className="modal-content-wrapper">
                    <div className="modal-header-wrapper">
                        <div className="modal-header">
                            <h3>Header</h3>
                        </div>
                    </div>

                    <div className="modal-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore, consequatur. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Odio doloribus nesciunt
                        deleniti ipsa voluptatem illum quod fuga voluptatum
                        dicta
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
