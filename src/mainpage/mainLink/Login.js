import React from 'react';
import './Login.css';
import RogoImage from '../images/wepimage.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-container">
            <Link to="/">
                <img className="login-rogo" src={RogoImage} alt="Logo" />
            </Link>
            <form>
                <div className="id-pass-box">
                    <div className="login-id">
                        <input type="text" className="login-id-box" size="25" placeholder="아이디" required />
                    </div>
                    <div className="login-password">
                        <input type="password" className="login-password-box" size="25" placeholder="비밀번호" required />
                    </div>
                </div>
                <button type="submit" className="loglogin-box">로그인</button>
            </form>
        </div>
    );
}