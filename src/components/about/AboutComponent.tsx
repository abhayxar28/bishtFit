"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";

export default function AboutComponent() {
  const router = useRouter();

  const features = [
    {
      icon: <Target className="w-8 h-8 text-[#ceff00]" />,
      title: "Our Mission",
      description: "To empower individuals through personalized fitness guidance and support, helping them achieve their health and wellness goals."
    },
    {
      icon: <Users className="w-8 h-8 text-[#ceff00]" />,
      title: "Our Team",
      description: "A dedicated group of fitness professionals committed to providing expert guidance and motivation to our clients."
    },
    {
      icon: <Award className="w-8 h-8 text-[#ceff00]" />,
      title: "Our Expertise",
      description: "Years of experience in fitness training, nutrition counseling, and personal development coaching."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#ceff00]" />,
      title: "Our Values",
      description: "Dedication, integrity, and a passion for helping others achieve their fitness goals."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-14">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 cursor-pointer"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#ceff00]">BishtFit</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Your journey to fitness starts here. We're dedicated to helping you achieve your health and wellness goals through personalized guidance and expert support.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#ceff00]/30 transition-colors"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Founded with a vision to transform lives through fitness, BishtFit has grown from a small personal training studio to a comprehensive fitness platform. Our journey began with a simple belief: everyone deserves access to quality fitness guidance.
          </p>
          <p>
            Today, we're proud to serve a diverse community of individuals who share our commitment to health and wellness. Whether you're just starting your fitness journey or looking to take your training to the next level, we're here to support you every step of the way.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Ready to start your fitness journey? Contact us today to learn more about our programs and how we can help you achieve your goals.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-[#ceff00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#ceff00]/90 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
} 