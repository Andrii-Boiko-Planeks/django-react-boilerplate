import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
    return (
        <div className="header-container">
            <svg width="684" height="131" viewBox="0 0 684 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_24_213)">
                    <rect x="3" width="684" height="123" fill="white"/>
                </g>
                <Link to="/homepage">
                    <rect x="-4" y="16" width="90" height="90" fill="url(#pattern0_24_213)"/>
                </Link>
                <Link to="/homepage">
                    <path
                        d="M617.914 93.4329V81.9322C617.914 79.0178 620.284 76.6502 623.219 76.6318H633.997C636.946 76.6318 639.336 79.0049 639.336 81.9322V93.3996C639.336 95.9273 641.39 97.9816 643.936 98H651.289C654.724 98.0087 658.02 96.6605 660.452 94.2526C662.883 91.8448 664.25 88.5753 664.25 85.1657V52.4969C664.25 49.7427 663.02 47.1302 660.892 45.3631L635.911 25.5285C631.544 22.0592 625.308 22.1713 621.07 25.7952L596.626 45.3631C594.398 47.0781 593.066 49.6984 593 52.4969V85.1324C593 92.2389 598.803 98 605.961 98H613.146C614.372 98.0088 615.551 97.5315 616.421 96.6741C617.29 95.8167 617.78 94.6499 617.78 93.4329H617.914Z"
                        fill="#200E32"/>
                </Link>
                <defs>
                    <filter id="filter0_d_24_213" x="-1" y="0" width="692" height="131"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_213"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_213"
                                 result="shape"/>
                    </filter>
                    <pattern id="pattern0_24_213" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_24_213" transform="scale(0.0111111)"/>
                    </pattern>
                    <image id="image0_24_213" width="90" height="90"
                           href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAAAsJJREFUeF7t3L2KU1EQB/D/BeMGFoJdfIBUeRMLYX0EtbCTxUZfQNRqsbWxEhvBUnyXFCkCMoQUJhdcm1y54EIQd3fuyXDOzJxJPR83vzOcm2JIg/hkEWiydIkmCOhMQxDQAZ1JIFObmOiAziSQqU1MdEBnEsjUJiY6oDMJZGoTEx3QcgKz2eykbdvXXdc9BnAC4NNoNDpfrVa/5LrcXMn9RPfI2+32a9M0D/6h+EBEzwJaQOAG5L76jogmAm1YJdxO9C3IPc5PIrrHUhIIcgnNQO7pLojohYAhq4Q7aA5y13XfJpPJo8Vi8ZulJBDkCno+n9/dbDZfADy8zqZpmu/j8fhsuVxeCvixS7iB1ozcn4YLaO3ILqAtIJuHtoJsGtoSslloa8gmoS0im4O2imwK2jKyGWjryCagPSCrh/aCrBraE7JaaG/IKqE9IquD9oqsCtozshpo78gqoGtALg5dC3JR6JqQi0HXhlwEukbk7NBal1vYyxlHBGZdN5hOp28BvLzueUtsEB1hNyg1N/QPAPf/94SlNogGaR0RHNBH4A1JzQ39BsCruDqGHFFCbLwME9BSU+LnXapcQl6N2Fnv6MMzqQ27GHSPXhN2UeiasItD14KtAroGbDXQ3rFVQXvGVgftFVsltEdstdDesFVDe8JWD+0F2wS0B2wz0NaxTUFbxjYHbRXbJLRFbLPQ1rBNQ1vCNg9tBdsFtAVsN9DasV1B99hal3TcQXOxAbwnovOEtZSkFJfQTOz273+TdklyA5PcQjOwL4noFMB+oFlSuGvoW7A/EtGTJLWEJPfQV9i73e4dgKcA7gD4vN/vn6/X6zbBLCmlCugDmavvm+VePjyR2qCTplEiKaAlFBk1ApqBJBES0BKKjBoBzUCSCAloCUVGjYBmIEmEBLSEIqNGQDOQJEICWkKRUSOgGUgSIX8AedVZeY3gu/UAAAAASUVORK5CYII="/>
                </defs>
            </svg>
        </div>
    );
}

export default Header;

