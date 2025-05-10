// app/components/CheckoutForm.jsx
"use client";

import { useState } from "react";
import { paymentRequestSchema } from "@/lib/schemas";

export default function CheckoutForm({ cartItems }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [paymentLink, setPaymentLink] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPaymentLink(null);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, cartItems }), // Match the expected schema
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create payment link");
      }

      setPaymentLink(result.paymentLink); // Success: Store the payment link
    } catch (err) {
      setError(err.message); // Display error to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-slate-800 dark:text-slate-100">Checkout</h2>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          name="addressLine"
          value={formData.addressLine}
          onChange={handleChange}
          placeholder="Address Line"
          required
        />
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
      </form>

      {/* Display results */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {paymentLink && (
        <div>
          <p>Payment Link Generated!</p>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            Go to Payment
          </a>
        </div>
      )}
    </div>
  );
}
