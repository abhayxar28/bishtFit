'use client';

import { useState } from 'react';
import VideoGalleryPolaroid from '../videocard/VideoGalleryPolaroid';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phoneNumber || !message || !name) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phoneNumber, message, name }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage('Message sent successfully!');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setName('');
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black grid grid-cols-1 md:grid-cols-2 text-[#ceff00]">
      {/* Left Image Section */}
      <div className="relative h-[500px] md:h-auto">
        <VideoGalleryPolaroid />
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      </div>

      {/* Right Contact Section */}
      <div className="flex flex-col justify-center px-8 py-12 max-w-xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-[#ceff00]">Get in touch.</h2>
        <p className="mb-6 text-base leading-relaxed text-white">
          I want to help you overcome all mental and physical hurdles in your
          everyday life. At 37, I've seen how life's challenges can wear us down mentally and physically. But I've also learned that it's never too late to take control of your health, rebuild your strength, and become the best version of yourself. I'm here to help you do exactly that — no matter where you're starting from.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md bg-black text-white border border-[#ceff00] placeholder:text-[#ceff00] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-black text-white border border-[#ceff00] placeholder:text-[#ceff00] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-3 rounded-md bg-black text-white border border-[#ceff00] placeholder:text-[#ceff00] focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Your message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-md bg-black text-white border border-[#ceff00] placeholder:text-[#ceff00] focus:outline-none"
          ></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-green-400 text-sm">{successMessage}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#ceff00] hover:bg-lime-400 transition text-black font-semibold py-3 rounded-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
