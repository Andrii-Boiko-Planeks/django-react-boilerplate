import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, { useState, useEffect, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import i18n from "../i18n";
import {useTranslation} from "react-i18next";

export default function MembershipFreezePage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    const [formData, setFormData] = useState({
        membershipType: "",
        startDate: "",
        endDate: "",
    });
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const [shiftPressed, setShiftPressed] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);


    const keyboard = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFocus = (field) => {
        setActiveField(field);
        setKeyboardVisible(true);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

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
                    membership_type: formData.membershipType,
                    start_date: formData.startDate,
                    end_date: formData.endDate,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                window.location.href = "/membership-freeze-pass/";
            } else {
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header />
                <div className="sidebar-included-main-content">
                    <SideBar />
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            {t('Freeze Membership')}
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <form className="freeze-membership-form">
                                <div className="form-field">
                                    <label htmlFor="membershipType">{t("Membership Type")}:</label>
                                    <input
                                        type="text"
                                        id="membershipType"
                                        name="membershipType"
                                        value={formData.membershipType}
                                        onChange={handleChange}
                                        required
                                        onFocus={() => handleFocus("membershipType")}
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="startDate">{t("Start Date")}:</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                        onFocus={() => handleFocus("startDate")}
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="endDate">{t("End Date")}:</label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        required
                                        onFocus={() => handleFocus("endDate")}
                                    />
                                </div>
                                <div className="form-note">
                                    <p>{t('Freeze Fee: 50 dhs')}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Pay Now')}</button>
                    {keyboardVisible && (
                        <div className="keyboard-container">
                            <Keyboard onKeyPress={handleKeyboardInput} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
