import React from 'react';
import './LoadingIndic.scss';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Загрузка...</p>
        </div>
    );
};

export default LoadingIndicator;