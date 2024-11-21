import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, {useEffect, useState, useRef} from "react";
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

export default function ReferBuddyPage() {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+971",
        phone: "",
        buddies: "",
    });

    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const [shiftPressed, setShiftPressed] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);

    const keyboard = useRef(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // change url
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/endpoint/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    country_code: formData.countryCode,
                    phone_number: formData.phone,
                    buddies: formData.buddies,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                window.location.href = "/refer-buddy-confirmation/";
            } else {
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleKeyboardInput = (input) => {
        let newInput = input;

        if (input === "{bksp}") {
            setFormData((prevData) => ({
                ...prevData,
                [activeField]: prevData[activeField].slice(0, -1),
            }));
        } else if (input === "{shift}") {
            setShiftPressed(!shiftPressed);
        } else if (input === "{lock}") {
            setCapsLockOn(!capsLockOn);
        } else if (input === "{enter}") {
            handleSubmit(new Event('submit'));
        } else if (input === "{tab}") {
            const inputFields = document.querySelectorAll("input, select");
            let currentIndex = Array.from(inputFields).findIndex(
                (field) => field.name === activeField
            );
            if (currentIndex >= 0 && currentIndex < inputFields.length - 1) {
                inputFields[currentIndex + 1].focus();
            }
        } else if (input === "{space}") {
            setFormData((prevData) => ({
                ...prevData,
                [activeField]: prevData[activeField] + " ",
            }));
        } else {
            if (shiftPressed || capsLockOn) {
                newInput = newInput.toUpperCase();
            }

            setFormData((prevData) => ({
                ...prevData,
                [activeField]: prevData[activeField] + newInput,
            }));

            if (shiftPressed) {
                setShiftPressed(false);
            }
        }
    };

    const handleFocus = (field) => {
        setActiveField(field);
        setKeyboardVisible(true);
    };

    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            {t('Buddy Referral')}
                        </h2>
                        <h3>{t('Refer a friend and Win')}!</h3>
                        <div className="membership-details-pages-main-info-text">
                            <form className="update-membership-form" onSubmit={handleSubmit}>
                                <div className="">
                                    <div className="form-field">
                                        <label htmlFor="buddies">{t('Number of Buddies')}:</label>
                                        <select
                                            className="buddies-select-field"
                                            id="buddies"
                                            name="buddies"
                                            value={formData.buddies}
                                            onChange={handleChange}
                                            required
                                            onFocus={() => handleFocus('buddies')}
                                        >
                                            <option value="buddie 1">{t('buddie 1')}</option>
                                            <option value="buddie 2">{t('buddie 2')}</option>
                                            <option value="buddie 3">{t('buddie 3')}</option>
                                        </select>
                                    </div>
                                </div>

                                <h4>Friend 1</h4>
                                <div className="form-field">
                                    <label htmlFor="name">{t('Name')}:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        onFocus={() => handleFocus('name')}
                                    />
                                </div>


                                <div className="email-phone-fields">
                                    <div className="form-field">
                                        <label htmlFor="email">{t('Email')}:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            onFocus={() => handleFocus('email')}
                                        />
                                    </div>

                                    <div className="form-field phone-field">
                                        <label htmlFor="phone">{t('Phone Number')}:</label>
                                        <div className="phone-input-container">
                                            <select
                                                className="country-code"
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                            >
                                                <option value="+971">+971</option>
                                                <option value="+380">+380</option>
                                                <option value="+1">+1</option>
                                                <option value="+44">+44</option>
                                                <option value="+49">+49</option>
                                            </select>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                onFocus={() => handleFocus('phone')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="successfull-text">
                    <h2>
                        {t('OR')}
                    </h2>
                    <p>
                        {t('Scan the QR code below to refer your friends')}!
                    </p>
                    <div className="successfull-text-insert">
                        <svg width="256" height="184" viewBox="0 0 256 184" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="256" height="184" fill="#D9D9D9"/>
                        </svg>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Refer me Buddies')}!</button>
                    {keyboardVisible && (
                        <div className="keyboard-container">
                            <Keyboard
                                onKeyPress={handleKeyboardInput}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
        ;
}
