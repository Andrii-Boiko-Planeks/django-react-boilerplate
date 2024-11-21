import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, {useEffect, useState, useRef} from "react";
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
import "../assets/styles/UpgradesOrAddOnsPage.css"

export default function UpgradesOrAddOnsPage() {
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
                            {t('Upgrades')}
                        </h2>
                        <h3>{t('Current Membership')}: </h3>
                        <p>{t('Name')}: [first] [last]</p>
                        <p>{t('Membership Type')}: [plus/core/flex]</p>
                        <p>{t('Membership Fee')}: [Amount]</p>
                        <div className="membership-details-pages-main-info-text">
                            <form className="update-membership-form" onSubmit={handleSubmit}>
                                <div className="">
                                    <div className="form-field">
                                        <label htmlFor="buddies">{t('New Membership')}:</label>
                                        <select
                                            className="buddies-select-field"
                                            id="newMembership"
                                            name="newMembership"
                                            value={formData.newMembership}
                                            onChange={handleChange}
                                            required
                                            onFocus={() => handleFocus('newMembership')}
                                        >
                                            <option value="buddie 1">{t('newMembership 1')}</option>
                                            <option value="buddie 2">{t('newMembership 2')}</option>
                                            <option value="buddie 3">{t('newMembership 3')}</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <p>{t('Membership Fee')}: [amt]</p>
                            <p>{t('Vat')}: [amt]</p>
                            <p>{t('Total')}: [amt]</p>
                        </div>
                    </div>
                </div>
                <div className="successfull-text">
                    <h2>
                        {t('Add-ons')}
                    </h2>
                    <form className="addons-form">
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="addon1"
                                name="addon1"
                                value="addon1"
                            />
                            <label htmlFor="addon1">{t('Addon 1')}</label>
                        </div>
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="addon2"
                                name="addon2"
                                value="addon2"
                            />
                            <label htmlFor="addon2">{t('Addon 2')}</label>
                        </div>
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="addon3"
                                name="addon3"
                                value="addon3"
                            />
                            <label htmlFor="addon3">{t('Addon 3')}</label>
                        </div>
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="addon4"
                                name="addon4"
                                value="addon4"
                            />
                            <label htmlFor="addon4">{t('Addon 4')}</label>
                        </div>
                    </form>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Confirm Selection!')}</button>
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
