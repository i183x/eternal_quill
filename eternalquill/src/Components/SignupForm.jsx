import React from 'react';
import "./SignupForm.css"
import Logo from '../images/Logo.png'

const SignupForm = () => {

    return (
        <div className="SignupForm_MainContainer">
            <div className="SignupForm_HearderContainer">
                <h2>Welcome to</h2>
                <img className="SignupForm_Image" src={Logo} alt="Logo" />
            </div>
            <div className="SignupForm_Container">
                <div>
                    <input placeholder=" Name" type="text"/>
                </div>
                <div>
                    <input placeholder="UserName"  type="text"/>
                </div>
                <div>
                    <input placeholder="Email"  type="email"/>
                </div>
                <div>
                    <input placeholder="Phone Number"  type="tel"/>
                </div>
                <div>
                    <input  placeholder="Date Of Birth" className="SignupForm_Date" type="date"/>
                </div>
                <div>
                    <input placeholder="Country"  type="text"/>
                </div>
                <div>
                    <input placeholder="Pen Name"  type="text"/>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

// const Data = [
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     },
//     {
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi.",
//         value: null,
//     }
// ];