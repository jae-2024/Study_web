import React from 'react';
import { Link } from "react-router-dom";
import './StudyPage.css';


export default function Body() {
    return (
        <>
            <div className="body-header-container">
                <div className="body-header-content">
                    <h2>같이 성장해요</h2>
                    <p>스터디에서 프로젝트로!!</p>
                </div>
            </div>
            <div className="body-container">
                <div className="body-left-container">
                    <div className="blog-left-side-top">
                        <ul>
                            <li>분야</li>
                            <li>프론트</li>
                            <li>백엔드</li>
                            <li>풀스텍</li>
                        </ul>
                    </div>
                    <div className="blog-left-side-bottom">
                        <h2>나의 파트너</h2>
                        <ul>
                            <li><a href="https://github.com/jeonghoon11">장정훈</a></li>
                            <li><a href="https://github.com/zldzldzz">이원진</a></li>
                            <li><a href="https://github.com/h2st0ry">박연희</a></li>
                            <li><a href="https://github.com/Okchun-Yee">한채훈</a></li>
                        </ul>
                    </div>
                </div>
                <div className="body-center-container">
                    <div>
                        <h2>Blog Center Container</h2>
                    </div>
                    <div className="blog-body-content">

                    </div>
                </div>
                <div className="body-right-container">
                    <h2>Body Right Container</h2>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}