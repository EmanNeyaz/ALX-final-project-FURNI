import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert("Your payment is done successfully!");
        // Handle payment submission logic here
        console.log('Payment submitted', { cardNumber, expiryDate, cvv, nameOnCard });

        // Clear all input fields
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setNameOnCard('');
    };

    return (
        <div className="payment-container container d-flex flex-column align-items-center">
            <h2>Payment Page</h2>
            <div className="hero-image">
          <img src="\src\assets\mastercard.png" alt="" />
        </div>
            <form onSubmit={handlePaymentSubmit} className='payment-form'>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nameOnCard">Name on Card</label>
                    <input
                        type="text"
                        id="nameOnCard"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="button">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;