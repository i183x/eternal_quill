import React, { useState } from 'react';
import "./SignupForm.css"
import Logo from '../images/Logo.png'
var CryptoJS = require("crypto-js");

const SignupForm = () => {

    const keySize = 16;

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const [data, setData] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [penname, setPenname] = useState("");

    const emailHandler = (e) => { setEmail(e.target.value) };
    const passwordHandler = (e) => { setPassword(e.target.value) };
    const nameHandler = (e) => { setName(e.target.value) };
    const usernameHandler = (e) => { setUsername(e.target.value) };
    const phoneHandler = (e) => { setPhone(e.target.value) };
    const pennameHandler = (e) => { setPenname(e.target.value) }
    const dobHandler = (e) => { setDob(e.target.value) };

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    
    const submitHandler = () => {
        const passKey = generateString(keySize);
        const emailKey = generateString(keySize);
        const emailEncode = CryptoJS.AES.encrypt(email, emailKey).toString();
        const passEncode = CryptoJS.AES.encrypt(password, passKey).toString();
        const emailData = emailKey+emailEncode;
        const passwordData = passKey+passEncode;
        // console.log(emailEncode);
        // console.log(passEncode);
        // console.log(emailKey);
        // console.log(passKey);
        // var bytes  = CryptoJS.AES.decrypt(emailEncode, emailKey).toString(CryptoJS.enc.Utf8);
        // var bytes1  = CryptoJS.AES.decrypt(passEncode, passKey).toString(CryptoJS.enc.Utf8);
        // console.log(bytes);
        // console.log(bytes1);
        const d = {
            "email": emailData,
            "password": passwordData,
            "name": name,
            "username": username,
            "phone": phone,
            "dob": dob,
            "penname": penname,
        }
        setData(d);
        console.log(data);
    };

    return (
        <div className="SignupForm_MainContainer">
            <div className="SignupForm_HearderContainer">
                {/* <span id="SignupForm_Text">Welcome to</span> */}
                <img className="SignupForm_Image" src={Logo} alt="Logo" />
            </div>
            <br />
            <div className="SignupForm_Container">
                <div>
                    <input autoFocus="True" placeholder="Name" type="text" onChange={nameHandler} />
                </div>
                <div>
                    <input placeholder="UserName" type="text" onChange={usernameHandler} />
                </div>
                <div>
                    <input placeholder="Email" type="email" onChange={emailHandler} />
                </div>
                <div>
                    <input placeholder="Phone Number" type="tel" onChange={phoneHandler} />
                </div>
                <div>
                    <input placeholder="Date Of Birth" type="date" onChange={dobHandler} />
                </div>
                <div>
                    <input placeholder="Pen Name" type="text" onChange={pennameHandler} />
                </div>
                <div>
                    <input placeholder="Password" type="password" onChange={passwordHandler} />
                </div>
            </div>
            {/* <div id="SignupForm_AcceptTerms123">
                <input type="radio" />
                <p>A</p>
            </div> */}
            <br />
            <button className="SignupForm_Button" onClick={submitHandler} >Sign Up!</button>
        </div>
    );
};

export default SignupForm;