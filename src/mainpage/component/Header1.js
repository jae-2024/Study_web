import React from 'react';
import { Link } from "react-router-dom";
import ser from '../images/ser.jpg';
import RogoImage from '../images/wepimage.jpg';
import {useNavigate} from "react-router-dom";

export default function Header1() {
    const navigate = useNavigate();

    const handleLoginClick = ()=>{
        navigate("/login")
    };

    return (
        <div className="menu-container">
            <img className="menu-rogo" src={RogoImage} alt="Logo" />
            <div className="menu-list">
                <div className="left-list">
                    <div className="menu-item">
                        <div><Link to="/Q&A" className="Q&A">Question</Link></div>
                        <div><Link to="/StudyPage" className="스터디">study</Link></div>
                        <div><Link to="/Project" className="프로젝트">project</Link></div>
                        <div><Link to="/Baekjoon" className="백준">baekjoon</Link></div>
                    </div>
                </div>
                <div className="right-list">
                    <div className="left-search-container">
                        <input className="in-text" type="text" size="200" placeholder="주저하지마세요." />
                        <button className="search-icon">
                            <img className="ser-i" src={ser} alt="search icon" />
                        </button>
                    </div>
                    <div className="right-search-container">
                        <div onClick={handleLoginClick} className="rogin-box">로그인</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
