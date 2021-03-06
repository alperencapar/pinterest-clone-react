import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    FaEllipsisH,
    FaTrashAlt,
    FaEdit,
    FaCloudDownloadAlt,
    FaRegBookmark,
    FaUserCircle,
    FaChevronDown
} from "react-icons/fa";

import "../assets/scss/thepin.scss";
import useFetch from "../useFetch";

const ThePin = () => {
    let params = useParams();
    const [showActions, setShowActions] = useState(false);
    const [showComments, setShowComments] = useState(true);

    const handlePageReload = (e) => {
        e.preventDefault();
    };

    const handleShowActionMenu = (e) => {
        handlePageReload(e);
        setShowActions(!showActions);
    };

    const handleShowOrHideComments = (e) => {
        handlePageReload(e);
        setShowComments(!showComments);
    };

    const { data } = useFetch(`https://picsum.photos/id/${params.pinId}/info`);
    console.log(data);

    return (
        <section className="the-pin-page">
            <div className="pin-page-container">
                <div className="pin-page-outer-wrappper">
                    <div className="pin-page-inner-wrapper">
                        <div className="pin-wrapper">
                            <div className="pin-card">
                                <div className="pin-photo-container">
                                    <img src={data?.download_url} alt="" />
                                </div>

                                <div className="pin-text-container">
                                    <div className="pin-text-wrapper">
                                        <div className="actions-wrapper">
                                            <div className="action-buttons">
                                                <div className="action-btn-menulist-btn">
                                                    <a
                                                        href="/"
                                                        onClick={
                                                            handleShowActionMenu
                                                        }
                                                    >
                                                        <FaEllipsisH />
                                                    </a>

                                                    {showActions ? (
                                                        <div className="action-menulist">
                                                            <a href="/">
                                                                <div className="action-delete-btn action-btn-holder">
                                                                    <div className="action-menu-item-icon">
                                                                        <FaTrashAlt />
                                                                    </div>

                                                                    <div className="action-menu-item-text">
                                                                        Pini Sil
                                                                    </div>
                                                                </div>
                                                            </a>

                                                            <a href="/">
                                                                <div className="action-edit-btn action-btn-holder">
                                                                    <div className="action-menu-item-icon">
                                                                        <FaEdit />
                                                                    </div>

                                                                    <div className="action-menu-item-text">
                                                                        Pini
                                                                        D??zenle
                                                                    </div>
                                                                </div>
                                                            </a>

                                                            <a href="/">
                                                                <div className="action-download-btn action-btn-holder">
                                                                    <div className="action-menu-item-icon">
                                                                        <FaCloudDownloadAlt />
                                                                    </div>
                                                                    <div className="action-menu-item-text">
                                                                        Pini
                                                                        ??ndir
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}

                                                    {/* <!-- action-menulist --> */}
                                                </div>
                                                {/* <!-- action-btn-menulist-btn --> */}

                                                <div className="action-bookmark-btn">
                                                    <a href="/">
                                                        <FaRegBookmark />
                                                    </a>
                                                </div>

                                                <div className="action-pins-wrapper">
                                                    <div className="action-pins-selectbox">
                                                        <div className="pin-select">
                                                            <select
                                                                name="selected_pin"
                                                                id="select"
                                                            >
                                                                <option value="1">
                                                                    GYM Beauty
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="action-pin-save-btn">
                                                        <a href="/">Kaydet</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- action-buttons --> */}
                                        </div>

                                        <div className="info-wrapper">
                                            {/* <!-- pin bilgileri (ba??l??k + a????klama + site) --> */}
                                            <div className="site-link">
                                                <a href="/">alperencapar.com</a>
                                            </div>
                                            <div className="pin-header">
                                                <h2>
                                                    Fitness Model in White Dress
                                                </h2>
                                            </div>
                                            <div className="pin-explanation">
                                                Lorem ipsum dolor, sit amet
                                                consectetur adipisicing elit.
                                                Accusamus vitae officia quod
                                                reiciendis reprehenderit
                                                assumenda minima eos sit quam
                                                ipsum.
                                            </div>

                                            {/* <!-- pin sahibi bilgileri + takip et --> */}
                                            <div className="pin-owner-wrapper">
                                                <div className="pin-owner-profile-pic">
                                                    <FaUserCircle />
                                                </div>
                                                <div className="pin-owner-infos">
                                                    <div className="pin-owner-name">
                                                        {data?.author}
                                                    </div>
                                                    <div className="pin-owner-followwer-count">
                                                        118 Takip??i
                                                    </div>
                                                </div>

                                                <div className="pin-owner-follow-button">
                                                    <a href="/">Takip et</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- yorumlar heading + a??ma kapatma --> */}
                                        <div className="comment-heading-section">
                                            <div className="comment-heading-section-wrapper">
                                                <div className="comment-heading">
                                                    Yorumlar
                                                </div>
                                                <div
                                                    className="comment-toggle-btn"
                                                    style={{
                                                        transform: showComments
                                                            ? "rotate(0deg)"
                                                            : "rotate(-90deg)"
                                                    }}
                                                >
                                                    <a
                                                        href="/"
                                                        onClick={
                                                            handleShowOrHideComments
                                                        }
                                                    >
                                                        <FaChevronDown />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- YORUM EKLE -->
                  <!-- YORUMLAR --> */}

                                        {showComments ? (
                                            <div className="comments-and-comment-add-section">
                                                <div className="all-comments-container">
                                                    <div className="all-comments-section">
                                                        {/* <!-- Every Single of comment --> */}
                                                        <div className="single-comment-container">
                                                            <div className="comment-profile-container">
                                                                <div className="comment-profile">
                                                                    <FaUserCircle />
                                                                </div>
                                                            </div>

                                                            <div className="comment-content-container">
                                                                <div className="padding-div">
                                                                    <div className="comment-owner-name-and-time">
                                                                        <div className="comment-owner-name">
                                                                            <span>
                                                                                Alperen
                                                                                ??apar
                                                                            </span>
                                                                        </div>
                                                                        <div className="comment-time">
                                                                            <span>
                                                                                5h
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="comment-body">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur,
                                                                        adipisicing
                                                                        elit.
                                                                        Voluptatem
                                                                        libero
                                                                        quo
                                                                        provident
                                                                        ipsum
                                                                        maxime?
                                                                        Ad.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Every Single of comment end --> */}
                                                    </div>
                                                </div>

                                                {/* <!-- New Comment Add --> */}
                                                <div className="comment-add-container">
                                                    <div className="comment-add-section-wrapper">
                                                        {/* <!-- Comment add profile pic --> */}
                                                        <div className="comment-profile-container">
                                                            <div className="comment-profile">
                                                                <FaUserCircle />
                                                            </div>
                                                        </div>
                                                        {/* <!-- Comment add profile pic end --> */}

                                                        {/* <!-- Comment Textarea --> */}
                                                        <div className="comment-add-body-container">
                                                            <div className="input-outer-container">
                                                                <div className="input-inner-container">
                                                                    <textarea
                                                                        name=""
                                                                        id=""
                                                                        placeholder="Yorum Ekle"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Comment Textarea --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                {/* <!-- pin-text-container sonu --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThePin;
