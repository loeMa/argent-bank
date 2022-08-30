import React from 'react';
import chat from "../assets/img/icon-chat.png";
import money from "../assets/img/icon-money.png";
import security from "../assets/img/icon-security.png";

const Features = () => {
    return (
        <div className='feature'>
            <h2 className="sr-only">Features</h2>
            <div className="feature__item">
                <img src={chat} alt="Chat Icon" className="feature__item__icon" />
                <h3 className="feature__item__title">You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </div>
            <div className="feature__item">
                <img
                    src={money}
                    alt="Chat Icon"
                    className="feature__item__icon"
                />
                <h3 className="feature__item__title">More savings means higher rates</h3>
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            </div>
            <div className="feature__item">
                <img
                    src={security}
                    alt="Chat Icon"
                    className="feature__item__icon"
                />
                <h3 className="feature__item__title">Security you can trust</h3>
                <p>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </p>
            </div>
        </div>
    );
};

export default Features;