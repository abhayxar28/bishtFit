import Link from "next/link";
import React from "react";

export default function BlogPrenatalFitness() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link href="/blogs" className="text-lime-400 flex items-center gap-2 mb-4">
          <span className="text-2xl flex items-center">←</span>
          <span className="text-lg font-bold hover:underline">Back to Blogs</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        {/* Header Image */}
        <div className="mb-8">
          <img
            src="/card/prenatalFitness.png"
            alt="Prenatal Fitness"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Title & Meta Description */}
        <h1 className="text-4xl font-bold mb-2">
          🤰 Safe & Strong: Best Exercises for a Healthy Pregnancy in Every Trimester
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          Discover the safest and most effective exercises for pregnant women. Learn what to do, what to avoid, and how to stay active through all trimesters—designed especially for Indian moms-to-be.
        </h2>

        {/* Intro */}
        <section className="space-y-5">
          <p>Pregnancy is a beautiful journey—but it’s also a time of massive change in your body. Staying active during this phase can help you feel stronger, reduce discomfort, and prepare for labor.</p>
          <p>The key? Safe, low-impact exercises that are suited to each trimester.</p>
          <p>Whether you're a first-time mom or experienced parent, this blog will help you understand what exercises to do, how often, and why movement matters during pregnancy.</p>
        </section>

        {/* Benefits */}
        <section className="mt-10 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-3">🌼 Benefits of Exercising During Pregnancy</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ Improves posture and reduces back pain</li>
            <li>✅ Reduces risk of gestational diabetes</li>
            <li>✅ Boosts energy and mood</li>
            <li>✅ Prepares body for labor and delivery</li>
            <li>✅ Helps with postpartum recovery</li>
          </ul>
          <p className="mt-3 italic">💡 Pro Tip: Always check with your doctor before starting any exercise routine during pregnancy.</p>
        </section>

        {/* Trimester-Based Exercises */}
        <section className="mt-10 space-y-6">
          <h3 className="text-2xl font-semibold">📅 Exercises by Trimester</h3>

          <div className="bg-[#1c1c1c] p-5 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-2">🤱 First Trimester (Weeks 1–12)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>🚶 Walking – 20–30 minutes daily</li>
              <li>🧘 Prenatal Yoga – Focus on breathing & stretching</li>
              <li>📏 Pelvic Tilts – Strengthens lower back and core</li>
              <li>💪 Kegel Exercises – Supports labor and recovery</li>
            </ul>
            <p className="mt-2 italic">🧘 Try YouTube channels or guided sessions specifically for Indian women.</p>
          </div>

          <div className="bg-[#1c1c1c] p-5 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-2">🤰 Second Trimester (Weeks 13–26)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>🧘 Prenatal Pilates – Improves balance & core strength</li>
              <li>🚴 Stationary Cycling – Safe low-impact cardio</li>
              <li>🏋️ Modified Strength Training – Use light weights</li>
              <li>🐱🐮 Cat-Cow Stretch – Helps relieve back pain</li>
            </ul>
            <p className="mt-2 italic">⚠️ Avoid lying flat on your back for long periods.</p>
          </div>

          <div className="bg-[#1c1c1c] p-5 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-2">👶 Third Trimester (Weeks 27–40)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>🚶 Gentle Walking or Swimming – Reduces joint stress</li>
              <li>🧎 Squats – Helps open the pelvis for labor</li>
              <li>🧘 Prenatal Yoga & Breathing – Stay calm & centered</li>
              <li>🤸 Light Stretching – Prevents cramps, improves mobility</li>
            </ul>
            <p className="mt-2 italic">🎧 Use calming Indian music or bhajans for meditation-style movement!</p>
          </div>
        </section>

        {/* Top 5 Safe Exercises */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">🔥 Top 5 Safe Exercises for All Trimesters</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>🚶 Walking – Simple, effective, and adaptable</li>
            <li>💪 Kegels – Strengthens pelvic floor</li>
            <li>📏 Pelvic Tilts – Reduces back pain</li>
            <li>🪑 Wall Sits – Builds leg strength safely</li>
            <li>🐱🐮 Modified Cat-Cow – Relieves lower back tension</li>
          </ul>
        </section>

        {/* Exercises to Avoid */}
        <section className="mt-10 bg-[#1c1c1c] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-3">🚫 Exercises to Avoid During Pregnancy</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>❌ High-impact cardio (running, jumping)</li>
            <li>❌ Heavy weightlifting</li>
            <li>❌ Lying flat on back post-first trimester</li>
            <li>❌ Ab crunches or twisting core exercises</li>
            <li>❌ Any activity with fall or trauma risk</li>
          </ul>
        </section>

        {/* Nutrition Tips */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">🥗 Nutrition Tip for Indian Moms-To-Be</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>🌅 Start your day with soaked almonds, banana, or warm haldi milk</li>
            <li>🍽️ Eat small, frequent meals rich in protein, calcium, and iron</li>
            <li>🍛 Indian foods to include: Dal-rice, khichdi, ragi roti, paneer, curd, sabudana</li>
            <li>💧 Stay hydrated—coconut water is great for energy and digestion</li>
          </ul>
        </section>

        {/* Final Thoughts */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">🙌 Final Thoughts</h3>
          <p className="mt-2">Pregnancy isn’t the time to “push limits”—it’s the time to honor your body, move with care, and stay mentally and physically strong.</p>
          <p className="mt-2">With proper guidance and gentle routines, you can enjoy a fitter, happier pregnancy.</p>
          <p className="mt-2 italic">Every step, every breath, and every stretch is one more way of saying: “I’m preparing for strength, love, and life.” 💛</p>
        </section>
      </div>
    </div>

  );
}