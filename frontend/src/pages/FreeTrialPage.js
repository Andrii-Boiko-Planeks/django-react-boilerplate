import Header from "../components/Header";
import React, {useEffect, useState, useRef} from "react";
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";
import "../assets/styles/FreeTrialPage.css";
import "../assets/styles/KeyboardStyles.css"
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

function FreeTrialPage() {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+971",
        phone: "",
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
        e.preventDefault(); // Prevent page reload on form submission

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/free-trial/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    country_code: formData.countryCode,
                    phone_number: formData.phone,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("authToken", data.token);
                sessionStorage.setItem("firstName", data.first_name)
                window.location.href = "/free-trial-pass/";
            } else {
                const errorData = await response.json();
                window.location.href = "/free-trial-fail/";
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
        <div className="App">
            <Header/>
            <main className="App-main">
                <div className="video-container">
                    <svg width="479" height="399" viewBox="0 0 479 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="474" height="394" rx="32.5" stroke="black" strokeWidth="5"/>
                        <line y1="346.5" x2="479" y2="346.5" stroke="black" strokeWidth="5"/>
                        <circle cx="48.5" cy="348.5" r="11.5" fill="black"/>
                        <path d="M201 140.119L287.662 187.5L201 234.881V140.119Z" stroke="black" strokeWidth="8"/>
                    </svg>
                </div>

                <div className="text-detail">
                    <p>{t('Free trial details')}</p>
                </div>

                <form className="free-trial-form" onSubmit={handleSubmit}>
                    <div className="name-fields">
                        <div className="form-field">
                            <label htmlFor="first-name">{t('First Name')}:</label>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                onFocus={() => handleFocus('firstName')}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="last-name">{t('Last Name')}:</label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                onFocus={() => handleFocus('lastName')}
                            />
                        </div>
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

                    <button type="submit" className="submit-button">{t('Submit')}</button>
                </form>

                {keyboardVisible && (
                    <div className="keyboard-container">
                        <Keyboard
                            onKeyPress={handleKeyboardInput}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}

export default FreeTrialPage;