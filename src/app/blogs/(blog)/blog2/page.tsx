import Link from "next/link";
import React from "react";

export default function Blog2() {
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
            src="/card/nutrition.png"
            alt="Fitness Roadmap"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold mb-2">
          🏃‍♂️ Fitness Roadmap: Simple Exercises to Start Your Journey (Beginner Friendly)
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          Want to get fit but don’t know where to start? Here’s a simple beginner-friendly roadmap to ease into exercise and build a solid fitness habit — no equipment needed.
        </h2>

        <section className="space-y-6">
          <p>Feeling lost when it comes to fitness? You’re not alone.</p>
          <p>
            A lot of people delay their health goals just because they don’t know how to start. This blog is your no-nonsense fitness starter pack — no gym membership, no fancy shoes, just commitment and consistency.
          </p>
          <p>Let’s build a foundation, step by step. 💪</p>

          {/* Roadmap Card Section */}
          <h3 className="text-2xl font-semibold mt-8">📅 Week-by-Week Roadmap (First 4 Weeks)</h3>

          {[
            {
              title: "🔹 Week 1: Wake Up the Body",
              goal: "Activate your muscles & build consistency (3–4 sessions/week)",
              exercises: [
                "10 Bodyweight Squats",
                "5 Push-ups (on knees if needed)",
                "15 Glute Bridges",
                "20-sec Plank hold",
                "20 Jumping Jacks",
                "🌀 Repeat x2",
              ],
              tip: "Walk 15–20 mins daily. It counts.",
            },
            {
              title: "🔹 Week 2: Build Control & Stamina",
              goal: "Improve form and breath control (4 sessions/week)",
              exercises: [
                "15 Squats",
                "8 Push-ups",
                "20 Mountain Climbers",
                "30-sec Plank",
                "10 Lunges (each leg)",
                "🌀 Repeat x2–3",
              ],
              tip: "Add: 10-min yoga or stretching post workout.",
            },
            {
              title: "🔹 Week 3: Add Intensity (No Equipment Needed)",
              goal: "Boost strength and endurance (4–5 sessions/week)",
              exercises: [
                "20 Air Squats",
                "10 Incline Push-ups (on a bench)",
                "20 High Knees",
                "10 Jump Squats",
                "40-sec Plank",
                "🌀 Repeat x3",
              ],
              tip: "Track your water, sleep, and food.",
            },
          ].map((week, i) => (
            <div key={i} className="bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner space-y-3">
              <h4 className="text-xl font-semibold">{week.title}</h4>
              <p><strong>Goal:</strong> {week.goal}</p>
              <ul className="list-disc pl-6 space-y-1">
                {week.exercises.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
              <p>💡 <em>{week.tip}</em></p>
            </div>
          ))}

          {/* Week 4 Table */}
          <div className="bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner mt-6">
            <h4 className="text-xl font-semibold">🔹 Week 4: Mix It Up</h4>
            <p><strong>Goal:</strong> Stay motivated and challenge your body</p>
            <table className="w-full mt-4 border border-gray-700 text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="p-2 border border-gray-700">Day</th>
                  <th className="p-2 border border-gray-700">Focus</th>
                  <th className="p-2 border border-gray-700">Workout</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mon", "Full Body", "Circuit Training"],
                  ["Tue", "Core & Stretch", "Abs + Yoga"],
                  ["Wed", "Walk", "30-min brisk walk"],
                  ["Thu", "Legs", "Squats + Lunges"],
                  ["Fri", "HIIT", "15-min cardio blast"],
                  ["Sat", "Recovery", "Foam rolling, slow yoga"],
                  ["Sun", "Rest", "You earned it 😌"],
                ].map(([day, focus, workout], idx) => (
                  <tr key={idx} className="border border-gray-700">
                    <td className="p-2 border border-gray-700">{day}</td>
                    <td className="p-2 border border-gray-700">{focus}</td>
                    <td className="p-2 border border-gray-700">{workout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top 5 Exercises */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">🧘 Top 5 Beginner Exercises (Master These)</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Bodyweight Squat</strong> – Strengthens lower body</li>
              <li><strong>Push-up</strong> (knee or incline) – Builds chest, arms, core</li>
              <li><strong>Plank Hold</strong> – Develops core strength</li>
              <li><strong>Walking Lunges</strong> – Improves balance, tone</li>
              <li><strong>Mountain Climbers</strong> – Cardio + core combo</li>
            </ul>
          </div>

          {/* Bonus Nutrition Tip */}
          <div className="mt-8 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-semibold">🍽️ Bonus Tip: Pair it with Simple Eating</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Eat whole, unprocessed foods</li>
              <li>Drink 2–3L water daily</li>
              <li>Avoid sugary drinks and fried snacks</li>
              <li>Prioritize protein in every meal (dal, paneer, chicken, eggs)</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">🎉 Conclusion</h3>
            <p className="mt-2">
              You don’t need a personal trainer, a gym, or even a workout mat to begin — just start. This roadmap is your first push. Be patient, listen to your body, and enjoy the process. The best transformations come from showing up, day after day.
            </p>
            <p className="mt-2">
              Your fitness journey starts with that first rep. Take it today. 🔥
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
