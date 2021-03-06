import React from 'react';
import './About.css';
import avatar from '../../images/avatar.jpg';

function About() {
    return (
        <section className="avatar">
            <div className="avatar__container">
                <img src={avatar} alt="Аватар" className="avatar__image"/>
                <div className="avatar__wrap">
                    <h2 className="avatar__title">Об авторе</h2>
                    <p className="avatar__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь,
                        какими технологиями разработки владеете.</p>
                    <p className="avatar__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились,
                        и чем можете помочь потенциальным заказчикам.</p>
                </div>
            </div> 
        </section>
    )
}

export default About;