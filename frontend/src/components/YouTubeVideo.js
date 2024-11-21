import React from 'react';
import PropTypes from 'prop-types';
import "../assets/styles/YouTubeVideo.css";

const YouTubeVideo = ({ videoId = "uNN62f55EV0" }) => {
    return (
        <div className="video-container">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&fs=0&iv_load_policy=3&disablekb=1&cc_load_policy=0`}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
        </div>
    );
};

YouTubeVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default YouTubeVideo;
