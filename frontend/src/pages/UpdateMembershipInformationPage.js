import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, {useEffect, useState, useRef} from "react";
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

export default function UpdateMembershipInformationPage() {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+971",
        phone: "",
        gender: "",
        dateOfBirth: "",
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
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    country_code: formData.countryCode,
                    phone_number: formData.phone,
                    gender: formData.gender,
                    date_of_birth: formData.dateOfBirth,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                window.location.href = "/update-membership-information-pass/";
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
                            Update Details
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <form className="update-membership-form" onSubmit={handleSubmit}>
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

                                <div className="gender-birth-fields">
                                    <div className="form-field">
                                        <label htmlFor="gender">{t('Gender')}:</label>
                                        <select
                                            className="gender-select-field"
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            onFocus={() => handleFocus('gender')}
                                        >
                                            <option value="male">{t('Male')}</option>
                                            <option value="female">{t('Female')}</option>
                                            <option value="other">{t('Other')}</option>
                                        </select>
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="dateOfBirth">{t('Date of Birth')}:</label>
                                        <input
                                            type="date"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleChange}
                                            required
                                            onFocus={() => handleFocus('dateOfBirth')}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Update Details')}</button>
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
    );
}
