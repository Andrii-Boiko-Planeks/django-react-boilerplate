import React, {useEffect} from 'react';
import Header from '../components/Header.js';
import '../assets/styles/LoginPage.css';
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";

function LoginPage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);


    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <div className="video-container">
                    <svg width="479" height="399" viewBox="0 0 479 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="474" height="394" rx="32.5" stroke="black" stroke-width="5"/>
                        <line y1="346.5" x2="479" y2="346.5" stroke="black" stroke-width="5"/>
                        <circle cx="48.5" cy="348.5" r="11.5" fill="black"/>
                        <path d="M201 140.119L287.662 187.5L201 234.881V140.119Z" stroke="black" stroke-width="8"/>
                    </svg>
                </div>

                <div className="qr-text">
                    <p>{t('Scan QR')}</p>
                </div>

                <div className="down-arrow">
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="90" height="90" fill="url(#pattern0_24_224)"/>
                        <defs>
                            <pattern id="pattern0_24_224" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_24_224" transform="scale(0.0111111)"/>
                            </pattern>
                            <image id="image0_24_224" width="90" height="90"
                                   href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAAA6RJREFUeF7t3TFPFEEcBfD/kiB3Ua+hmIaCgopPooWJ9jZa2BmJBZ2fQBOktDEmNBZGSuN3oaCgcI7QHIQ9IXHMJFxCNrfsu33r3Gx8lOx7s7O/27295ZKhMP0kESiS7EU7sT5Cr5jZn769dr2B3tjYGF5dXb0viuL5DfLB6urq7snJSdkH9N5AO+c+mtmbCuqe9/6toDsUcM79MjNXGXLsva/+rsO9djdUn87oMO+wvfe9OIZeTDICO+cE3d0FVj+SoFMo64xOpCxoQaMCuhmiUmRO0CQgWhc0KkXmBE0ConVBo1JkTtAkIFoXNCpF5gRNAqJ1QaNSZE7QJCBaFzQqReYETQKidUGjUmRO0CQgWhc0KkXmBE0ConVBo1JkTtAkIFoXNCpF5gRNAqJ1QaNSZE7QJCBaFzQqReYETQKidUGjUmRO0CQgWhc0KkXmBE0ConVBo1JkTtAkIFoXNCpF5gRNAqJ1QaNSZE7QJCBaFzQqReYETQKidUGjUmRO0CQgWhc0KkXmBE0ConVBo1JkTtAkIFoXNCpF5gRNAqJ1QaNSZE7QJCBaFzQqReYETQKidUGjUmRO0CQgWhc0KkXmBE0ConVBo1Jk7n+Djksix5/kyyInhY5LE19fX8dVc+PSxGUI4fNoNHp3dHT0u+mEYVZy3NraWjs/P/9gZi/NbCWE8DWE8Pr09PSiab9dbU8K7Zz7ZGavbk8+hPBjNBo9a8JuCx2RJ5PJYVEUjyv7/TIej190Bdk0Tkrowjk3MbMH1Ukh2G2g65Bv9j/13t9P9TaSEjqumBuhH8579ZuwF4VuQI5TuPDej8xs7iq+TWfoottTQ++Z2U7dJO/CXgQaQI5T2Pfe185lUcimfFJoBKAOG4Vm9tGExWxPCh0nur29fe/s7OybmT2pm3hRFD8Hg8HT4+Pj6SyDQLcdmwFEu8mh22I3QeeMHI95KdBtsO+Czh15qdCLYpdlOff/rayvr6+1eStCL/mucks7o2cHsLm5Obi8vPxefaCoPtTUbY83z6Yu8kDUFWjtfedf7wAZH7n0kXGqmXk31TbjdNFZ+hk9O4iusXNCXvp7dPVM6Qo7N+TsoNEb5F2Xco7IWUIz2LkiZwvdBjtn5KyhF8HOHTl7aAS7D8i9gI6TjA810+n0MITwqPogk8PDCPI5O5vP0U2TjdhlWe7ffN8Y4wfD4XDn9l/4msZY5vbeQN9Cms05yTcjXb04fYTu6tiTjiPoRNx/AWJTY3l3MfhuAAAAAElFTkSuQmCC"/>
                        </defs>
                    </svg>
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
