import React from 'react';
import './Preloader.css';

function Preloader({ isActive }) {
    return (
        <section className={`preloader ${isActive && 'preloader_active'}`}>
            <div className="preloader__wrap">
                <div className="preloader__circle"></div>
            </div>
        </section>
    )
}

export default Preloader;