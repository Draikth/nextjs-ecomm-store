'use client';

import { useState } from 'react';

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNo, setCreditCardNo] = useState('');
  const [expiration, setExpiration] = useState('');
  const [security, setSecurity] = useState('');

  return (
    <div>
      <form>
        <div>
          <label htmlFor="First name">First name: </label>
          <input
            id="First name"
            data-test-id="checkout-first-name"
            name="First name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Last name">Last name: </label>
          <input
            id="Last name"
            data-test-id="checkout-last-name"
            name="Last name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            data-test-id="checkout-email"
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            data-test-id="checkout-address"
            name="address"
            placeholder="address"
            value={address}
            onChange={(event) => setAddress(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="city">City: </label>
          <input
            id="city"
            data-test-id="checkout-city"
            name="city"
            placeholder="city"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="postal code">Postal Code: </label>
          <input
            id="postal code"
            data-test-id="checkout-postal-code"
            name="postal code"
            type="number"
            placeholder="postal code"
            value={postalCode}
            onChange={(event) => setPostalCode(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="country">Country: </label>
          <input
            id="country"
            data-test-id="checkout-country"
            name="country"
            placeholder="country"
            value={country}
            onChange={(event) => setCountry(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="credit card">Credit Card No: </label>
          <input
            id="credit card"
            data-test-id="checkout-credit-card"
            name="credit card"
            type="number"
            placeholder="credit card no."
            value={creditCardNo}
            onChange={(event) => setCreditCardNo(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="expiration">Credit Card Expiration Date: </label>
          <input
            id="expiration"
            data-test-id="checkout-expiration-date"
            name="expiration"
            type="date"
            placeholder="expiration date"
            value={expiration}
            onChange={(event) => setExpiration(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="security">Credit Card Security Code: </label>
          <input
            id="security"
            data-test-id="checkout-security-code"
            name="security"
            type="number"
            placeholder="security code"
            value={security}
            onChange={(event) => setSecurity(event.currentTarget.value)}
            required
          />
        </div>
        <br />
        <br />
        <button>Confirm Order</button>
      </form>
    </div>
  );
}
