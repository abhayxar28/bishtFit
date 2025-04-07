import Link from "next/link";
import React from "react";

export default function Blog5() {
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
            src="/card/fitnessChallange.png"
            alt="Leg Day Guide"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Title & Meta Description */}
        <h1 className="text-4xl font-bold mb-2">
          🦵 Leg Day Done Right: The Ultimate Lower Body Workout Guide for All Levels
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          Skip leg day? Never again. Discover the best leg exercises, why training legs matters, and how to build strong, powerful lower body strength—Indian style!
        </h2>

        {/* Intro */}
        <section className="space-y-5">
          <p>
            Leg day has become a bit of a meme—but there’s a reason serious lifters never skip it. 💪
          </p>
          <p>
            Your legs are home to some of the biggest muscles in your body. Training them boosts overall strength, burns more calories, and improves balance, posture, and even athletic performance.
          </p>
          <p>
            Whether you're working out in a local gym in India or following a home-based plan, this blog will guide you through everything you need to know to crush leg day the right way.
          </p>
        </section>

        {/* Why You Should Never Skip Leg Day */}
        <section className="mt-10 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-3">🔥 Why You Should Never Skip Leg Day</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ Builds muscle mass & strength</li>
            <li>✅ Boosts testosterone & growth hormones naturally</li>
            <li>✅ Improves mobility and posture</li>
            <li>✅ Burns more fat due to larger muscle activation</li>
            <li>✅ Balances physique (don’t be that guy with big arms & chicken legs 😅)</li>
          </ul>
        </section>

        {/* Top Exercises */}
        <section className="mt-10 space-y-6">
          <h3 className="text-2xl font-semibold">🏋️ Top Leg Day Exercises</h3>
          {[
            {
              name: "Barbell Back Squats",
              muscles: "Quads, hamstrings, glutes, core",
              why: "The king of leg exercises—builds full lower-body strength.",
              tip: "Start light, keep your back straight, and go deep (but controlled).",
            },
            {
              name: "Leg Press Machine",
              muscles: "Quads, glutes, hamstrings",
              why: "Safer for beginners than squats, but still effective.",
              tip: "Don’t lock your knees at the top. Control is key.",
            },
            {
              name: "Walking Lunges (with Dumbbells)",
              muscles: "Glutes, quads, hamstrings",
              why: "Builds balance and hits the glutes hard.",
              tip: "Perfect for gym floors or even open parks in India.",
            },
            {
              name: "Romanian Deadlifts",
              muscles: "Hamstrings, glutes, lower back",
              why: "Improves posture and strengthens the back chain.",
              tip: "Use dumbbells or a barbell—slow, steady form wins.",
            },
            {
              name: "Calf Raises (Standing or Seated)",
              muscles: "Calves",
              why: "Defines the lower leg and supports ankle/knee strength.",
              tip: "Try them after every leg session for that clean finish.",
            },
          ].map((ex, i) => (
            <div key={i} className="bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner space-y-2">
              <h4 className="text-xl font-bold">{ex.name}</h4>
              <p><strong>Muscles Worked:</strong> {ex.muscles}</p>
              <p><strong>Why:</strong> {ex.why}</p>
              <p>💡 <em>{ex.tip}</em></p>
            </div>
          ))}
        </section>

        {/* Bonus Indian-Friendly Additions */}
        <section className="mt-10 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-3">💥 Bonus: Indian-Friendly Additions</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>🏃 Stair Sprints (If your gym or apartment has stairs!)</li>
            <li>🏋️ Desi Goblet Squats (Use a dumbbell or a bucket at home!)</li>
            <li>🧘 Bodyweight Squats (Great warmup before temple visits or early morning walks!)</li>
          </ul>
        </section>

        {/* Routine Table */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">📅 Sample Leg Day Routine (Beginner to Intermediate)</h3>
          <table className="w-full border border-gray-700 text-sm">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="p-2 border border-gray-700">Exercise</th>
                <th className="p-2 border border-gray-700">Sets</th>
                <th className="p-2 border border-gray-700">Reps</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bodyweight Squats (Warm-up)", "2", "15"],
                ["Barbell Back Squats", "3", "10"],
                ["Leg Press Machine", "3", "12"],
                ["Walking Lunges", "2", "12 (each leg)"],
                ["Romanian Deadlifts", "3", "10"],
                ["Calf Raises", "4", "20"],
                ["Stretch & Cooldown", "-", "5–10 min"],
              ].map(([exercise, sets, reps], idx) => (
                <tr key={idx} className="border border-gray-700">
                  <td className="p-2 border border-gray-700">{exercise}</td>
                  <td className="p-2 border border-gray-700">{sets}</td>
                  <td className="p-2 border border-gray-700">{reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Tips Section */}
        <section className="mt-10 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-3">🧠 Tips to Maximize Your Leg Day Gains</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ Warm up with dynamic stretches or treadmill walking</li>
            <li>✅ Focus on form first, not heavy weights</li>
            <li>✅ Train legs once or twice per week</li>
            <li>✅ Fuel up properly—have a banana, protein, or simple meal 30–60 min before</li>
            <li>✅ Hydrate—especially in Indian summers! 💧</li>
          </ul>
        </section>

        {/* Post Workout Nutrition */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">🥗 Post-Leg Day Nutrition Ideas</h3>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Paneer/Tofu wrap with multigrain roti</li>
            <li>Whey protein with banana</li>
            <li>Boiled eggs + sweet potato</li>
            <li>Dal-chawal with ghee for recovery</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">🙌 Conclusion</h3>
          <p className="mt-2">
            Leg day might be tough, but it’s where true strength is built. Whether you're aiming for bigger quads, better balance, or fat loss, lower body training is non-negotiable.
          </p>
          <p className="mt-2">
            So next time leg day comes around, don’t skip it—own it.
          </p>
          <p className="mt-2">
            Your future self (and your jeans) will thank you.
          </p>
        </section>
      </div>
    </div>
  );
}
