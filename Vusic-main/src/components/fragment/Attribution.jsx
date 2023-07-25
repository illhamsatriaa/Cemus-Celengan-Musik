import React from 'react';
import '../assets/scss/Attribution.scss';
import logo from '../assets/img/author.svg'
import {useSelector} from "react-redux";

const Attribution = () => {
    const {playing} = useSelector(state => state.musicReducer);
    return (
        <div className={"Attribution"}>
            <h3>Author</h3>
            <div className="main-row">
                        <div className="main-row-img">
                            <img className="logo" src={logo} alt=""/>
                        </div>
            </div>
        </div>

    );
}

export default Attribution;