import React from 'react';


const Card = ({title, amount, description}) => {

    return (
        <div>
            <section className="card">
                <div className="card__content">
                    <h3 className="card__content__title">{title}</h3>
                    <p className="card__content__amount"> {amount} </p>
                    <p className="card__content__description"> {description} </p>
                </div>
                <div className="card__content cta">
                    <button className="card__content__button">View transactions</button>
                </div>
            </section>
        </div>
    );
};

export default Card;