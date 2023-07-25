import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/cemus2.svg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>About</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>CEMUS</h3>
                        <p>Celengan Music</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Cemus adalah celengan musik yang menjadi Platform untuk mendengarkan lagu-lagu Hits.</p>
                    <p>Cemus dibuat untuk memudahkan para pecinta musik untuk mendengarkan musik yang mereka sukai.</p>
                    <p>Disini Cemus menyediakan berbagai jenis genre musik.</p>
                    <p>Mulai dari Pop, Jazz, Dangdut, Dll.</p>
                    <p>Cemus dapat di akses tanpa menggunakan biaya apapun.</p>
                    <p>Selamat menikmati Cemus.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/emil.salim.794628?mibextid=9R9pXO"} title={"emil"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/illhamsatriaa/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;