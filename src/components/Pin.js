import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';


// {img,pinTitle,profilePic,ProfileName}

const Pin = ({ img, pinTitle, loading, pinId }) => {
    const [gridRowSpan, setGridRowSpan] = useState("auto");
    const pinWrapper = useRef();
    const pinPhoto = useRef();
    const pinText = useRef();

    // let pinPhotoHeight = pinPhoto.current?.clientHeight;

    const calcSpanSize = () => {
        let pinPhotoHeight = pinPhoto.current.clientHeight;
        let pinTextHeight = pinText.current.clientHeight;
        let containerHeight = pinPhotoHeight + pinTextHeight;
        let spanSize = Math.ceil(containerHeight / 10);
        return `span ${spanSize}`;
    };

    const setSpanSize = (spanSize) => {
        setGridRowSpan(spanSize);
    };

    useEffect(() => {
        setSpanSize(calcSpanSize());
    }, [loading]);

    const getPinId = (e) => {
        let pinId = pinWrapper.current.dataset.pinId
        console.log(pinId); 
    }

    return (
        <div
            className="pin-wrapper"
            style={{ gridRowEnd: gridRowSpan }}
            ref={pinWrapper}
            data-pinId={pinId}//ref.current.dataset.pinId
            onClick={getPinId}
        >
            <Link to={`/pin/${pinId}`}>
            <div className="pin-photo" ref={pinPhoto}>
                <div className="photo-wrapper">
                    <img src={img} alt="" onLoad={() =>{setSpanSize(calcSpanSize())}} />
                </div>
            </div>
            </Link>
            <div className="text-wrapper" ref={pinText}>
                <div className="pin-text-title">{pinTitle}</div>
                <div className="profile-info">
                    <div className="profile-pic"></div>
                    <div className="profile-name"></div>
                </div>
            </div>
        </div>
    );
};

export default Pin;
