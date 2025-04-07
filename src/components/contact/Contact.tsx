'use client'

import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phoneNumber || !message || !name) {
      setError('All fields are required.');
      return;
    }

    setError('');

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber, message, name }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage('User created successfully');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setName('');
      } else {
        setError(data.error || data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#cef522] text-black rounded-2xl p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 shadow-2xl">
        {/* Left Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6">Get in touch.</h2>
          <p className="text-lg">
            I want to help you overcome all mental and physical hurdles in your
            everyday life. At 37, I’ve seen how life’s challenges can wear us down — mentally and physically. But I’ve also learned that it’s never too late to take control of your health, rebuild your strength, and become the best version of yourself. I’m here to help you do exactly that — no matter where you’re starting from.
          </p>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full mt-1 p-2 rounded-md border border-black outline-none focus:ring-2 focus:ring-black ${
                email ? 'bg-[#e8f2ff]' : 'bg-white'
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number (required)
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91 98765 43210"
              pattern="[0-9]{10,15}"
              className={`w-full mt-1 p-2 rounded-md border border-black outline-none focus:ring-2 focus:ring-black ${
                phoneNumber ? 'bg-[#e8f2ff]' : 'bg-white'
              }`}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message (required)
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help you?"
              className={`w-full mt-1 p-2 rounded-md border border-black outline-none focus:ring-2 focus:ring-black ${
                message ? 'bg-[#e8f2ff]' : 'bg-white'
              }`}
            ></textarea>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name (required)
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={`w-full mt-1 p-2 rounded-md border border-black outline-none focus:ring-2 focus:ring-black ${
                name ? 'bg-[#e8f2ff]' : 'bg-white'
              }`}
            />
          </div>

          {/* Error or Success Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-black font-bold text-sm">{successMessage}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 mt-2 rounded-lg font-semibold hover:bg-gray-900 transition cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
